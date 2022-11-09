import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const AddPackages = () => {
    const [error, setError] = useState('')

    const handleAddPackage = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const room = form.room.value;
        const group = form.group.value;
        const imageUrl = form.imageUrl.value;
        const details = form.details.value;

        const tourPackage = {
            price: price,
            picture: imageUrl,
            name: name,
            duration: duration,
            location: location,
            group: group,
            room: room,
            description: details
        }
        console.log(tourPackage);
        fetch('http://localhost:5000/addpackages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourPackage)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Tour Package Added successfully')
                    form.reset();

                }
            })
            .catch(error => setError(error.message));

    }


    return (
        <form onSubmit={handleAddPackage} className='max-w-xl mx-auto text-left'>
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
                    name="name"
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
                    name="location"
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
                        name="price"
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
                        name="duration"
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
                        name="room"
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
                        name="group"
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
                    name="imageUrl"
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
                    type="text"
                    name="details"
                    required={true}
                    rows={4}
                />
            </div>
            <p className='text-red-500'>{error}</p>
            <div className='mx-auto my-6'>
                <Button gradientMonochrome="cyan" type="submit">
                    Add Package
                </Button>

            </div>
        </form>
    );
};

export default AddPackages;