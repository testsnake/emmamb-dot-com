import useWeb3Forms from '@web3forms/react';

const accessKey = '';

interface FormSchema {
    name: string;
    email: string;
    message: string;
}

const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {},
    onSuccess: (msg, data) => {},
    onError: (msg, data) => {}
});
