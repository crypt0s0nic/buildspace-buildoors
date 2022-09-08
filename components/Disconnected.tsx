import { Button, Container, VStack, Heading, Text, Center } from '@chakra-ui/react'
import { FC, MouseEventHandler, useCallback } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

const Disconnected: FC = () => {
  const modalState = useWalletModal()
  const { wallet, connect } = useWallet()

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.defaultPrevented) return

      if (!wallet) {
        modalState.setVisible(true)
      } else {
        connect().catch(() => {})
      }
    },
    [wallet, connect, modalState]
  )

  return (
    <Container>
      <VStack spacing={20}>
        <Heading
          color="white"
          as='h1'
          size='3xl'
          noOfLines={2}
          textAlign="center"
        >
          Mint your buildoor
        </Heading>
        <Button
          bgColor="accent"
          color="white"
          maxW="380px"
          onClick={handleClick}
        >
          <Text>become a buildoor</Text>
          <ArrowForwardIcon />
        </Button>
      </VStack>
    </Container>
  )
}

export default Disconnected
