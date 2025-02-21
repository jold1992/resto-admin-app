'use client'

import { useState } from "react"

export default function Login() {

    //manejar el formulario con variables
    const [nombres, setNombres] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleRegister = (e: any) => {
        e.preventDefault()
        console.log('Register')

        console.log(nombres)
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

    }




    return (
        <main className="h-full flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="h-full">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-2/5 sm:w-3/5 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="/logo_resto_gestor_app_optimized.png"
                            className="w-full"
                            alt="Sample image" />
                    </div>

                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form>
                            <div className="flex flex-row items-center justify-center">
                                <p className="mb-0 mr-4 text-3xl font-bold">REGISTRO</p>
                            </div>

                            <div className="my-4 flex items-center before:flex-1 before:border-t before:border-neutral-300 after:flex-2 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-bold dark:text-white"></p>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    className="peer block w-full rounded border-0 bg-transparent px-0 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                    id="name"
                                    placeholder="nombres"
                                    value={nombres}
                                    onChange={(e) => setNombres(e.target.value)}
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-2 leading-7 font-extrabold transition-all duration-200 ease-out -translate-y-4 scale-75 text-primary dark:text-primary"
                                >Nombres
                                </label>
                            </div>

                            <div className="flex">
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        className="peer block w-full rounded border-0 border-b-1 bg-transparent px-0 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="username" placeholder="usuario" value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <label
                                        htmlFor="username"
                                        className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-2 leading-7 font-extrabold transition-all duration-200 ease-out -translate-y-4 scale-75 text-primary dark:text-primary"
                                    >Usuario
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        type="email"
                                        className="peer block w-full rounded border-0 bg-transparent px-0 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="email"
                                        placeholder="correo electrónico"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-2 leading-7 font-extrabold transition-all duration-200 ease-out -translate-y-4 scale-75 text-primary dark:text-primary"
                                    >Correo electrónico
                                    </label>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="relative mb-6">
                                    <input
                                        type="password"
                                        className="peer block w-full rounded border-0 bg-transparent px-0 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="password"
                                        placeholder="contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label
                                        htmlFor="password"
                                        className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-2 leading-7 font-extrabold transition-all duration-200 ease-out -translate-y-4 scale-75 text-primary dark:text-primary"
                                    >Contraseña
                                    </label>
                                </div>

                                <div className="relative mb-6">
                                    <input
                                        type="password"
                                        className="peer block w-full rounded border-0 bg-transparent px-0 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="confirmPassword"
                                        placeholder="confirmar contraseña"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <label
                                        htmlFor="confirmPassword"
                                        className="pointer-events-none absolute left-0 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-2 leading-7 font-extrabold transition-all duration-200 ease-out -translate-y-4 scale-75 text-primary dark:text-primary"
                                    >Repita la contraseña
                                    </label>
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    className="inline-block border rounded bg-transparent px-7 pb-2.5 pt-3 text-sm font-medium leading-normal text-white shadow-md hover:shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200 ease-linear"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={handleRegister}
                                >
                                    REGISTRAR
                                </button>

                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Ya tienes una cuenta,
                                    <a
                                        href="/login"
                                        className="text-primary hover:underline"
                                    > inicia sesión.</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </main >
    )
}