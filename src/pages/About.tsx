import { PureComponent, ReactNode } from 'react';
import { Text } from '../components/Text';
import { Helmet } from 'react-helmet';



interface AboutProps {
}

interface AboutState {
}

class About extends PureComponent<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    return (
      
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        <Helmet>
                    <title>о нас</title>
                    <meta name="description" content="тиньков олег" />
                    <meta name="keywords" content="о нет" />
                </Helmet>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-6">О нас</h1>
          
          <Text size="medium" color="black">
            олег тиньков
          </Text>
          <Text size="large" color="red">
            олег тиньков
          </Text>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Связь</h2>
            <form className="space-y-4">
              <div className="flex gap-4">
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <img
            src="./Start Sky.jpg"
            alt="картиночка"
            className="md:max-w-full border border-white/45 bg-white rounded-4xl object-cover h-full"
            style={{ 
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
              maxHeight: "500px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default About;