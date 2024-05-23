import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import './styles.css'

export function DialogComponent({ open, onClose, onSubmit }) {

    const [newPost, setNewPost] = useState('');
    const cancelButtonRef = useRef(null);

    const handleNewPostChange = (event) => {
        setNewPost(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        onSubmit(newPost); // Call the onSubmit callback with the new post content
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >  <form onSubmit={handleFormSubmit}>
                                <Dialog.Panel className="dialog-panel">
                                    <div className="dialog-header">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="dialog-title">
                                                    Adicionar novo post
                                                </Dialog.Title>
                                                <div className="dialog-text">
                                                    <textarea type="text" className='input-dialog' onChange={handleNewPostChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dialog-footer">
                                        <button
                                            type="submit"
                                            className="dialog-button-add"
                                            onClick={onClose}
                                        >
                                            Adicionar
                                        </button>
                                        <button
                                            type="button"
                                            className="dialog-button-cancel"
                                            onClick={onClose}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </form>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
