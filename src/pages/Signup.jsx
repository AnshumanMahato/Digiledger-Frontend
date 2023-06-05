import SignupForm from "../components/SignupForm";

function Signup(params) {
  return (
    <div className="min-h-screen w-screen text-white bg-accent flex flex-col justify-center items-center pt-10 px-[10%] font-poppins">
      <h1 className="font-bold text-[3rem] mb-10">Digiledger</h1>
      <div>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
