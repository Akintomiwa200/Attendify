import Button from "../../../components/button/Button"
import Input from "../../../components/input/Input"
const AddStudent = () => {
    return (
        <div className="w-100vw lg:w-[87vw] flex flex-col pl-16">
            <div className="h-[20vh] w-[70vw] flex justify-between items-center  ">
                <div>
                    <h1 className='text-xl text-blue-600'>Add Student</h1>
                    <h3>
                        <span className='text-gray-500'>Manage / student / </span>
                        AddStudent
                    </h3>
                </div>

            </div>
            <div className="flex flex-col w-[40vw] h-[60vh] justify-center items-center bg-white">
                <form action="">
                    <h2 className="text-blue-600 text-2xl font-bold mb-4">Add a Student</h2>
                    <div className="flex flex-col">
                        <label htmlFor="">Full name</label>
                        <Input placeholder='' width='w-[30vw]' />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="">Username</label>
                            <Input placeholder='' width='w-[14.5vw]' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">password</label>
                            <Input placeholder='' width='w-[14.5vw]' />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">email</label>
                        <Input placeholder='' width='w-[30vw]' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Address</label>
                        <Input placeholder='' width='w-[30vw]' />
                    </div>
                    <div className="flex gap-4 mt-8">
                        <Button width='w-[8vw]'>Submit</Button>
                        <Button className="bg-gray-500" width='w-[8vw]'>Reset</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudent
