import { Button, Flex, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../components/Form/Input"

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'Mínimo 6 caracteres'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {

    console.log(values)

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align='center'
      justify='center'
    >
      <Flex
        as="form"
        w='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input label="Email" type='email' {...register('email')} error={errors.email} />

          <Input label="Senha" type='password' {...register('password')} error={errors.password} />


        </Stack>

        <Button type="submit" mt='6' colorScheme={"pink"} size='lg' isLoading={formState.isSubmitting} >Entrar</Button>
      </Flex>
    </Flex>

  )
}
