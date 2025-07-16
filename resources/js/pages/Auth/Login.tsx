import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head } from '@inertiajs/react';

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
                <Card className="w-full max-w-sm rounded-2xl shadow-xl">
                    <CardContent className="p-8">
                        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Welcome Back!</h1>

                        <form className="space-y-4">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label htmlFor="email">Gmail</Label>
                                <Input id="email" type="email" placeholder="yourname@gmail.com" className="w-full" />
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="••••••••" className="w-full" />
                            </div>

                            {/* Submit Button */}
                            <Button className="mt-4 w-full">Login</Button>
                        </form>

                        {/* Divider & Google Auth */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t"></div>
                            </div>
                            <div className="relative flex justify-center text-sm uppercase">
                                <span className="bg-white px-2 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full">
                            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                                <path
                                    fill="#4285F4"
                                    d="M24 9.5c3.54 0 6.52 1.28 8.96 3.36l6.64-6.64C34.82 2.02 29.7 0 24 0 14.32 0 6.06 5.74 2.21 13.97l7.81 6.07C12.12 13.34 17.56 9.5 24 9.5z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M46.04 24.5c0-1.47-.13-2.88-.37-4.25H24v8.5h12.54c-.56 2.87-2.07 5.32-4.26 7.05l6.7 6.7c4.31-3.98 6.77-9.79 6.77-16z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M10.26 28.65c-.64-1.91-1-3.95-1-6.05s.36-4.14 1-6.05l-7.81-6.07C.79 13.17 0 18.44 0 24c0 5.56.79 10.83 2.21 15.52l8.05-6.18z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M24 48c5.7 0 10.82-2.02 14.7-5.45l-6.7-6.7c-1.96 1.31-4.42 2.07-7 2.07-6.44 0-11.88-3.84-14.04-9.35l-8.05 6.18C6.06 42.26 14.32 48 24 48z"
                                />
                            </svg>
                            Continue with Google
                        </Button>

                        {/* Signup Link */}
                        <p className="mt-4 text-center text-sm text-gray-500">
                            Don't have an account?{' '}
                            <a href="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </a>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
