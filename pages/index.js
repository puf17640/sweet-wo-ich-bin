import {
  Stack,
  Box,
  Heading,
  Button,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head"

const data = [
  { title: 'Verkehrt', url: 'https://youtu.be/B6-i5z6jZMo' },
  { title: 'Spotify', url: 'https://open.spotify.com/artist/6SsdZjlnwgPQtlIMkjS9Or?si=5-8D9sY6SHamTuQ6qJmAcw' },
  { title: 'SoundCloud', url: 'https://soundcloud.com/sweet1100' },
  { title: 'Apple Music', url: 'https://music.apple.com/us/artist/%24weet/1500805233' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SWEET</title>
      </Head>
      <Box bg={"black"}>
        <Stack
          alignItems={"center"}
          direction={"column"}
          minH={"100vh"}
          w={"full"}
        >
          <Stack
            flexGrow={1}
            direction={{ base: "column", lg: "row" }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            w={"full"}
            py={4}
            px={{ base: 4, md: 32 }}
            spacing={{ base: 2, lg: 0 }}
          >
            <Box
              align={"center"}
              maxW={"sm"}
              w={"full"}
              minH={{ base: "200px", md: "300px", lg: "400px" }}
              maxH={{ base: "300px", md: "400px", lg: "500px" }}
              flexGrow={1}
              bg={"url(/static/profile.png)"}
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              rounded={"lg"}
            ></Box>
            <Box minW={{ lg: "300" }}>
              <Heading
                as={Stack}
                direction={"row"}
                spacing={0}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"7xl"}
                color={"whiteAlpha.900"}
                align={"center"}
                fontFamily={"Alatsi, sans-serif"}
                letterSpacing={2}
              >
                <Box as={"span"} fontSize={"150%"}>$</Box>
                <span>WEET</span>
              </Heading>
              <Heading
                fontSize={"3xl"}
                color={"whiteAlpha.700"}
                align={"center"}
                fontFamily={"Alegreya Sans SC, sans-serif"}
                letterSpacing={1}
                mb={4}
              >
                Vienna
              </Heading>
              <Divider />
              <Stack mt={6} spacing={2}>
                {data.map(({ title, url }) => (
                  <Link
                    _hover={{ textDecoration: "none" }}
                    href={url}
                    title={title}
                    fontSize={"lg"}
                    key={title}
                  >
                    <Button
                      colorScheme={"gray"}
                      w={"full"}
                      textTransform={"uppercase"}
                      letterSpacing={2}
                      fontFamily={"Be Vietnam, sans-serif"}
                      _hover={{
                        bgColor: "gray.300",
                      }}
                    >
                      {title}
                    </Button>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Text
          align={"center"}
          color={"whiteAlpha.500"}
          fontWeight={"bold"}
          p={2}
          fontSize={{ base: "sm", md: "md" }}
        >
          Website by{" "}
          <Link target={"_blank"} href={"https://pufler.dev"} textDecoration={"underline"}>
            Julian Pufler
          </Link>
        </Text>
      </Box>
    </>
  );
}
