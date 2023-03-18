/* eslint-disable no-case-declarations */
import React, { createContext, useCallback, useReducer } from 'react';

type DataItem = {
  likes?: number | null;
  comments?: number | null;
};

type Data = {
  [key: string]: DataItem;
};

type DataObject = {
  data: Data | null;
};

type SET = {
  type: 'SET';
  commentId: string;
  dataItem: DataItem;
};

type CLEAR = {
  type: 'CLEAR';
  commentId: string;
};

type ActionType = SET | CLEAR;

const InitialState: DataObject = {
  data: {},
};

const LikesAndCommentContext: React.Context<{
  data: Data | null;
  setData: (commentId: string, dataItem: DataItem) => void;
  clearData: (commentId: string) => void;
  getCommentData: (commentId: string) => { likes: number; comments: number };
}> = createContext({
  data: null as Data | null,
  setData: (_commentId: string, _dataItem: DataItem) => {},
  clearData: (_commentId: string) => {},
  getCommentData: (_commentId: string) => ({
    likes: 0,
    comments: 0,
  }),
});

const UserReducer = (state: DataObject, action: ActionType) => {
  switch (action.type) {
    case 'SET':
      const newState = { ...state.data };
      newState[action?.commentId || ''] = action.dataItem;

      return {
        data: newState,
      };

    case 'CLEAR':
      const oldState = { ...state.data };
      oldState[action?.commentId || ''] = {};

      return {
        data: oldState,
      };

    default:
      return state;
  }
};

const LikesAndCommentsProvider = (props: any) => {
  const [state, dispatch] = useReducer(UserReducer, InitialState);

  const setData = (commentId: string, dataItem: DataItem) => {
    dispatch({
      type: 'SET',
      commentId,
      dataItem,
    });
  };

  const clearData = (commentId: string) => {
    dispatch({
      type: 'CLEAR',
      commentId,
    });
  };

  const getCommentData = useCallback(
    (commentId: string) => {
      return (
        state?.data?.[commentId] || {
          likes: 0,
          comments: 0,
        }
      );
    },
    [state.data]
  );

  return (
    <LikesAndCommentContext.Provider
      value={{
        data: state.data,
        setData,
        clearData,
        getCommentData,
      }}
      {...props}
    />
  );
};

export { LikesAndCommentContext, LikesAndCommentsProvider };
