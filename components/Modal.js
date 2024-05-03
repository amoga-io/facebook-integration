import { Fragment, useRef, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Example({ open, setOpen }) {
    const dialogPanelRef = useRef(null); // Ref to the dialog panel element
    const [dialogHeight, setDialogHeight] = useState(0); // State to store dialog panel height
    const cancelButtonRef = useRef(null)

    useEffect(() => {
        if (dialogPanelRef.current) {
            // Update dialog height when the dialog panel ref changes
            setDialogHeight(dialogPanelRef.current.offsetHeight);


        }

        const handleMessage = (event) => {
            console.log("eventData", event)
            const eventData = event.data;
            if (eventData && (eventData.event_type === 'close_modal' || eventData.event_type === 'object_created')) {
                handleClose();
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [dialogPanelRef, open]);

    const handleClose = () => {
        setOpen(false);
    };

    console.log("dialogHeight", dialogHeight)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-100 mt-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-end justify-center p-1 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                ref={dialogPanelRef} // Assign ref to dialog panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                            >
                                <div className="bg-white px-0 pb-0 pt-0 sm:p-1 sm:pb-1">
                                    <iframe
                                        src={"https://forms.amoga.app/applications/1219d98f-7cda-4073-a2be-e9efec173d28?height=" + dialogHeight || "500"}
                                        title="iframe"
                                        style={{
                                            width: "100%",
                                            height: "78vh",
                                            border: "none",
                                        }}
                                    ></iframe>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
