import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align={'center'}
        >
            {showProfileData && (
                <Box mr='4' textAlign={'right'} >
                    <Text>Ronnie Pettersonn</Text>
                    <Text
                        color='gray.300'
                        fontSize={'small'}
                    >
                        petterson28@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar size={'md'} name='Ronnie Pettersonn' src='https://github.com/ronniepettersonn.png' />
        </Flex>
    )
}