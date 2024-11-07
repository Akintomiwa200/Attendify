import Button from "../../../components/button/Button"
import Input from "../../../components/input/Input"
const AddSubject = () => {
    return (
        <div className="w-100vw lg:w-[87vw] flex flex-col lg:pl-16 p-4">
            <div className="h-[20vh] w-[70vw] flex justify-between items-center  ">
                <div>
                    <h1 className='text-xl text-blue-600'>Add Subject</h1>
                    <h3>
                        <span className='text-gray-500'>Manage / </span>
                        Add Subject
                    </h3>
                </div>

            </div>
            <div className="flex flex-col w-[90vw] py-8 lg:w-[40vw] lg:h-[60vh] justify-center items-center bg-white mx-auto ">
                <form action="">
                    <h2 className="text-blue-600 text-2xl font-bold mb-4">Add a Subject</h2>
                    <div className="flex flex-col">
                        <label htmlFor="">Subject Name</label>
                        <Input placeholder='' width='lg:w-[30vw] w-[82vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Subject Code</label>
                        <Input placeholder='' width='lg:w-[30vw] w-[82vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Course</label>
                        <Input placeholder='' width='lg:w-[30vw] w-[82vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Teacher</label>
                        <Input placeholder='' width='lg:w-[30vw] w-[82vw]' />
                    </div>
                    <div className="flex gap-4 mt-8">
                        <Button width='lg:w-[8vw] w-[40vw]'>Submit</Button>
                        <Button className="bg-gray-500" width='lg:w-[8vw] w-[40vw]'>Reset</Button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddSubject
