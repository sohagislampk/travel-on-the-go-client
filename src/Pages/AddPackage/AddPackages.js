import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddPackages = () => {
    return (
        <div className='max-w-xl mx-auto text-left'>
            <h1 className='text-center mx-auto rounded-lg py-2 mt-8 mb-4 bg-sky-400 text-white text-3xl font-bold'>Add Details of Tour Package</h1>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="Package Name"
                    />
                </div>
                <TextInput
                    id="base"
                    placeholder="Tour package name"
                    type="text"
                    sizing="md"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="Location"
                    />
                </div>
                <TextInput
                    id="base"
                    placeholder="Tour Location"
                    type="text"
                    sizing="md"
                />
            </div>
            <div className='flex justify-between'>
                <div className='w-full mr-4'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base"
                            value="Price"
                        />
                    </div>
                    <TextInput
                        id="base"
                        placeholder="Tour Package Price"
                        type="text"
                        sizing="md"
                    />
                </div>
                <div className='w-full'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base"
                            value="Duration"
                        />
                    </div>
                    <TextInput
                        id="base"
                        placeholder="Tour Duration day and night"
                        type="text"
                        sizing="md"
                    />
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='w-full mr-4'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base"
                            value="Hotel Room"
                        />
                    </div>
                    <TextInput
                        id="base"
                        placeholder="Hotel Room Shared / Single"
                        type="text"
                        sizing="md"
                    />
                </div>
                <div className='w-full'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base"
                            value="Group Count"
                        />
                    </div>
                    <TextInput
                        id="base"
                        placeholder="People can add in group"
                        type="text"
                        sizing="md"
                    />
                </div>


            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="Image URl"
                    />
                </div>
                <TextInput
                    id="base"
                    placeholder="Image Url"
                    type="text"
                    sizing="md"
                />
            </div>



            <div id="textarea">
                <div className="mb-2 block">
                    <Label
                        htmlFor="comment"
                        value="Tour Details"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Tour details ..."
                    required={true}
                    rows={4}
                />
            </div>
            <div className='mx-auto my-6'>
                <Button gradientMonochrome="cyan" type="submit">
                    Add Package
                </Button>

            </div>
        </div>
    );
};

export default AddPackages;