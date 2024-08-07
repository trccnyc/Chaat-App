import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Login=()=>{
    const toast = useToast();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
          toast({
            title: "Please Fill all the Feilds",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
          return;
        }
    
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const { data } = await axios.post(
            "http://localhost:5000/api/user/login",
            { email, password },
            config
          );
          console.log(data);
          toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
        
          localStorage.setItem("userInfo", JSON.stringify(data));
          setLoading(false);

        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
        }
    };

return <form onSubmit={submitHandler}>
<VStack spacing="5px">
 
  <FormControl  isRequired>
    <FormLabel>Email</FormLabel>
    <Input placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
  </FormControl>
  <FormControl  isRequired>
    <FormLabel>Password</FormLabel>
    <InputGroup>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
          {showPassword ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  </FormControl>
  <Button
    colorScheme="blue"
    width="100%"
    type="submit"
    style={{ marginTop: 15 }}
    onClick={submitHandler}
    isLoading={loading}
  >
    Login
  </Button>
</VStack>
</form>
}
export default Login