import Button from "../../../components/button/Button"
import Input from "../../../components/input/Input"
const AddStudentByTeacher = () => {
    return (
        <div className="w-[100vw] lg:w-[87vw] flex flex-col lg:pl-16 min-h-[90vh]">
            <div className="h-[20vh] w-[70vw] flex justify-between items-center  ml-8 lg:ml-0">
                <div>
                    <h1 className='text-xl text-blue-600'>Add Student</h1>
                    <h3>
                        <span className='text-gray-500'>Manage / student / </span>
                        AddStudent
                    </h3>
                </div>

            </div>
            <div className="flex flex-col lg:w-[40vw] lg:h-[60vh] justify-center items-center bg-white py-8">
                <form action="">
                    <h2 className="text-blue-600 text-2xl font-bold mb-4">Add a Student</h2>
                    <div className="flex flex-col">
                        <label htmlFor="">Full name</label>
                        <Input placeholder='' width='lg:w-[30vw] w-[80vw]' />
                    </div>
                    <div className="flex gap-4 lg:flex-row flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="">Username</label>
                            <Input placeholder='' width='lg:w-[14.5vw] w-[80vw]' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">password</label>
                            <Input placeholder='' width='lg:w-[14.5vw] w-[80vw]' />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">email</label>
                        <Input placeholder='' width='lg:w-[30vw] w-[80vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Address</label>
                        <Input placeholder='' width='lg:w-[30vw] w-[80vw]' />
                    </div>
                    <div className="flex gap-4 mt-8">
                        <Button className="px-4" width='lg:w-[8vw] w-[40vw]'>Submit</Button>
                        <Button className="bg-gray-500 px-4" width='lg:w-[8vw] w-[40vw]'>Reset</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudentByTeacher
