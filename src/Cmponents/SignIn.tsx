import React from "react";

interface Prop {
  navigate: (path: string) => void;
}

const SignIn: React.FC<Prop> = ({ navigate }) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="m-auto w-full rounded-md bg-white p-6 shadow-xl lg:max-w-xl">
        <h1 className="text-grey-700 text-center text-3xl font-semibold uppercase">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="text-grey-700 focus:border-grey-400 focus:ring-grey-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="text-grey-700 focus:border-grey-400 focus:ring-grey-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-grey-600 text-xs hover:underline">
            Forget Password?
          </a>
          <div className="mt-6" onClick={() => navigate("/home")}>
            <button className="hover:bg-grey-600 focus:bg-grey-600 w-full transform rounded-md bg-gray-600 px-4 py-2 tracking-wide text-white transition-colors duration-200 focus:outline-none">
              Login
            </button>
          </div>
        </form>
        <div className="relative mt-6 flex w-full items-center justify-center border border-t">
          <div className="absolute bg-white px-5">Or</div>
        </div>
        <div className="mt-4 flex gap-x-2">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-gray-600 p-2 focus:ring-2 focus:ring-gray-200 focus:ring-offset-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-5 w-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button className="flex w-full items-center justify-center rounded-md border border-gray-600 p-2 focus:ring-2 focus:ring-gray-200 focus:ring-offset-1">
            <div
              style={{
                backgroundImage: `url('https://projects.intra.42.fr/assets/42_logo_black-684989d43d629b3c0ff6fd7e1157ee04db9bb7a73fba8ec4e01543d650a1c607.png')`,
              }}
              className=" h-5 w-5 bg-cover bg-center bg-no-repeat fill-current"
            >
              {/* <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path> */}
            </div>
          </button>
        </div>

        <p className="mt-8 text-center text-xs font-light text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="text-grey-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
