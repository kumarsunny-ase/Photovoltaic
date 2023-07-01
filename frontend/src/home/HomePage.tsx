import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
import { useStore } from "../app/ stores/store";
import LoginForm from "../features/users/LoginForm";
import RegisterForm from "../features/users/RegisterForm";

export default observer(function HomePage() {
  const {userStore, modalStore} = useStore();
    return (
      <Segment inverted textAlign="center" vertical className="masthead">
        <Container text>
          <Header as="h1" inverted>
            <Image
              size="massive"
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="logo"
              style={{ marginBottom: 12 }}
            />
            Photovoltatic System
          </Header>
          {userStore.isLoggedIn ? (
            <>
              <Header
                as="h2"
                inverted
                content="Welcome to Photovoltatic system"
                color="yellow"
              />
              <Button as={Link} to="/projects" size="huge" inverted>
                Go to Project Activities
              </Button>
            </>
          ) : (
            <>
            <Button onClick={() => modalStore.openModal(<LoginForm />)} size="huge" inverted>
              Login!
            </Button>
            <Button onClick={() => modalStore.openModal(<RegisterForm />)} size="huge" inverted>
              Register
            </Button>
            </>
            
          )}
        </Container>
      </Segment>
    );
})