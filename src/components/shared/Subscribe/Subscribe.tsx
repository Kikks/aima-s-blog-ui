import type { FormEvent } from 'react';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import type { EmailFormFields } from 'react-mailchimp-subscribe';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';
import { UserContext } from '@/contexts/user';
import { isEmail, isEmpty } from '@/utils/validators/helpers';

const SubscribeForm = ({
  status,
  message,
  onValidated,
}: {
  status: 'error' | 'success' | 'sending' | null;
  message: string | Error | null;
  onValidated: (data: EmailFormFields) => void;
}) => {
  const { user } = useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [payload, setPayload] = useState({
    email: '',
    firstName: (user?.name || '').split(' ')[0],
    lastName: (user?.name || '').split(' ')[1],
  });

  useEffect(() => {
    if (status === 'success' && !isSubmitted) {
      setPayload({
        email: '',
        firstName: (user?.name || '').split(' ')[0],
        lastName: (user?.name || '').split(' ')[1],
      });
      toast.success('You have subscribed successfully.');
      setIsSubmitted(true);
    }
  }, [status, isSubmitted]);

  useEffect(() => {
    if (status === 'error') {
      toast.error(
        typeof message === 'string' ? message : message?.message || ''
      );
      setIsSubmitted(false);
    }
  }, [status]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isEmpty(payload.email)) {
      toast.error('Email cannot be empty');
      return;
    }

    if (!isEmail(payload.email)) {
      toast.error('Invalid email address');
      return;
    }

    onValidated({
      EMAIL: payload.email,
      // @ts-ignore
      MERGE1: payload.firstName,
      MERGE2: payload.lastName,
    });
  };

  return isSubmitted ? (
    <div className="my-10 grid w-full place-items-center px-10">
      <Heading variant="h3">You have subscribed successfully!</Heading>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="flex w-[90%] max-w-[500px] flex-wrap justify-center gap-3 md:gap-5"
    >
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Enter your email address"
          onChange={(event) =>
            setPayload({ ...payload, email: event.currentTarget.value })
          }
        />
      </div>
      <Button
        variant="solid"
        type="submit"
        className=""
        disabled={!isEmail(payload.email)}
        loading={status === 'sending'}
      >
        Subscribe
      </Button>
    </form>
  );
};

const Subscribe = () => {
  return (
    <section className="w-full">
      <div className="container grid justify-center justify-items-center gap-5 py-28 text-center md:gap-7 md:py-40">
        <Heading className="max-w-[50ch]">
          Stay motivated with our weekly post in your inbox{' '}
        </Heading>

        <Text>Subscribe to the Aima’s Writing newsletter</Text>

        <MailchimpSubscribe
          url={process.env.NEXT_PUBLIC_MAILCHIMP_URL as string}
          render={({ subscribe, status, message }) => (
            <SubscribeForm
              status={status}
              message={message}
              onValidated={subscribe}
            />
          )}
        />
      </div>
    </section>
  );
};

export default Subscribe;
