'use client';

import axios from 'axios';

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
}
    from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal'
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import useLoginModal from '@/app/hooks/useLoginModal';



const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/listings', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error('algo deu errado');
            })
            .finally(() => {
                setIsLoading(false);
            })

    }
    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>

            <Heading
                title='Bem Vindo a Airbnb'
                subtitle='Criar Conta'
            />
            <Input
                id="email"
                label="email"
                disabled-={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="name"
                disabled-={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                type="password"
                label="password"
                disabled-={isLoading}
                register={register}
                errors={errors}
                required
            />

        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continuar com Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label="Continuar com GitHub"
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div
                className="
                text-neutral-500
                text-center
                mt-4
                font-light
              "
            >
                <div className="
                justify-center flex flex-row items-center gap-2">
                    <div>
                        Já tem uma conta?
                    </div>gh
                    <div
                        onClick={toggle}
                        className="
                        text-neutal-800
                        cursor-pointer
                        hover:underline
                  "
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal