import { PureComponent, ReactNode } from 'react';
import { Text } from '../components/Text';


interface AboutProps {
  // Define your props interface here if needed
}

interface AboutState {
  // Define your state interface here if needed
}

class About extends PureComponent<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    return (
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
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
              {/* Add form fields here when needed */}
              <div className="flex gap-4">
                {/* Form content goes here */}
              </div>
              <div>
                {/* Additional form content goes here */}
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
              maxHeight: "500px" // Added for better image control
            }}
          />
        </div>
      </div>
    );
  }
}

export default About;