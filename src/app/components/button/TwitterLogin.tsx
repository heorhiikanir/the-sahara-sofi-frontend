import TwitterLogin from "react-twitter-login";

export default () => {
  const authHandler = () => {
    // console.log(err, data);
  };

  return (
    <TwitterLogin
      buttonTheme="dark"
      authCallback={authHandler}
      consumerKey='OBQe22xI7TBfE3tIvUJNriekx'
      consumerSecret='lTHm1FWQGAxUYAWk3QhPhqPDACKMLbS9S7obi6rKz4aBORCqyl'
    />
  );
};