import Button from "../../../components/button/Button"
import Input from "../../../components/input/Input"
const AddSubject = () => {
    return (
        <div className="w-100vw lg:w-[87vw] flex flex-col pl-16">
            <div className="h-[20vh] w-[70vw] flex justify-between items-center  ">
                <div>
                    <h1 className='text-xl text-blue-600'>Add Subject</h1>
                    <h3>
                        <span className='text-gray-500'>Manage / </span>
                        Add Subject
                    </h3>
                </div>

            </div>
            <div className="flex flex-col w-[40vw] h-[60vh] justify-center items-center bg-white">
                <form action="">
                    <h2 className="text-blue-600 text-2xl font-bold mb-4">Add a Subject</h2>
                    <div className="flex flex-col">
                        <label htmlFor="">Subject Name</label>
                        <Input placeholder='' width='w-[30vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Subject Code</label>
                        <Input placeholder='' width='w-[30vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Course</label>
                        <Input placeholder='' width='w-[30vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Teacher</label>
                        <Input placeholder='' width='w-[30vw]' />
                    </div>
                    <div className="flex gap-4 mt-8">
                        <Button width='w-[6vw]'>Submit</Button>
                        <Button className="bg-gray-500" width='w-[6vw]'>Reset</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddSubject
