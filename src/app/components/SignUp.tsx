"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormComponentProps {
    title: string;
    fields: { label: string; name: string; type: string }[];
    onSubmit: (data: { [key: string]: string }) => Promise<void>;
    successMessage: string;
}

const FormComponent = ({ title, fields, onSubmit, successMessage }: FormComponentProps) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            await onSubmit(formData);
            setSuccess(successMessage);
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (err) {
            setError('An error occurred! Please try again later.');
            console.error('Error:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} className="mb-0 space-y-6">
                        {fields.map((field) => (
                            <div key={field.name}>
                                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{field.label}</label>
                                <div className="mt-1">
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        type={field.type}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-transparent rounded-md shadow-sm bg-white text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                                    />
                                </div>
                            </div>
                        ))}
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>
                        {error && <p className="text-red-500 mt-2 font-weight: 700">{error}</p>}
                        {success && <p className="text-green-500 mt-2 font-weight: 700">{success}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;

//signUp Form
/*
"use client";
import FormComponent from './FormComponent'; // Shtoni importin për FormComponent

const SignUpForm = () => {
    const fields = [
        { label: 'Name', name: 'name', type: 'text' },
        { label: 'Email address', name: 'email', type: 'email' },
        { label: 'Password', name: 'password', type: 'password' },
    ];

    const handleSubmit = async (data: { name: string; email: string; password: string }) => {
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error('Registration failed');
        }
    };

    return (
        <FormComponent
            title="Create your account"
            fields={fields}
            onSubmit={handleSubmit}
            successMessage="Registration was successful!"
        />
    );
};

export default SignUpForm;
*/
