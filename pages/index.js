import {
  Stack,
  Box,
  Image,
  Heading,
  Button,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";
import data from "../data";

const MainButton = ({ title, url }) => {
  return (
    <Link
      _hover={{ textDecoration: "none" }}
      href={url}
      title={title}
      fontSize={"lg"}
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
  );
};

export default function Home() {
  return (
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
              fontSize={"8xl"}
              color={"whiteAlpha.900"}
              align={"center"}
              fontFamily={"Alatsi, sans-serif"}
              letterSpacing={2}
            >
              SWEET
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
              {data.map((entry) => (
                <MainButton key={entry.title} {...entry} />
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
        fontSize={"md"}
      >
        Website by{" "}
        <Link target={"_blank"} href={"https://pufler.dev"} textDecoration={"underline"}>
          Julian Pufler
        </Link>
      </Text>
    </Box>
  );
}
