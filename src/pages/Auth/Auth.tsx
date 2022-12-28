import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

const supabase = createClient(
  "https://pwijlwutanegkeicgbgd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3aWpsd3V0YW5lZ2tlaWNnYmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyNTI2ODQsImV4cCI6MTk4NzgyODY4NH0.O3s4QnkFemyV13bNCRxClVCfHCM4wspPLWFfd9YMZwg",
);

export default function AuthWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        navigate("/diagnostic");
      }

      checkSession();
    };
  }, []);

  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/diagnostic");
    }
  });

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="lg"
        p={8}
        width="600px"
      >
        <Auth
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
          supabaseClient={supabase}
        />
      </Box>
    </Flex>
  );
}
