import { Heading, Text, TextField, Button } from '@radix-ui/themes';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <main className="flex items-center justify-center w-full px-4 min-h-screen bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]">
        <motion.form
          className="flex w-full flex-col max-w-96 bg-white rounded-4xl p-6 shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Link to="/" className="mb-8" title="Go to Home">
            <svg className="size-10" width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m8 4.55 6.75 3.884 6.75-3.885M8 27.83v-7.755L1.25 16.19m27 0-6.75 3.885v7.754M1.655 8.658l13.095 7.546 13.095-7.546M14.75 31.25V16.189m13.5 5.976V10.212a2.98 2.98 0 0 0-1.5-2.585L16.25 1.65a3.01 3.01 0 0 0-3 0L2.75 7.627a3 3 0 0 0-1.5 2.585v11.953a2.98 2.98 0 0 0 1.5 2.585l10.5 5.977a3.01 3.01 0 0 0 3 0l10.5-5.977a3 3 0 0 0 1.5-2.585"
                stroke="#1d293d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Heading size="8" className="text-gray-900">Sign in</Heading>

          <Text className="mt-4 text-gray-500">
            Please enter email and password to access.
          </Text>

          <div className="mt-10">
            <Text as="label" weight="medium">Email</Text>
            <TextField.Root
              size="3"
              placeholder="Please enter your email"
              className="mt-2 w-full"
              required
              type="email"
              name="email"
            />
          </div>

          <div className="mt-6 mb-8">
            <Text as="label" weight="medium">Password</Text>
            <TextField.Root
              size="3"
              placeholder="Please enter your password"
              className="mt-2 w-full"
              required
              type="password"
              name="password"
            />
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer"
            size="3"
          >
            Login
          </Button>

          <Text className="text-center py-8">
            Don't have an account?{' '}
            <Link to="/auth/signup" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </Text>
        </motion.form>
      </main>
    </motion.div>
  );
};

export default Login;
