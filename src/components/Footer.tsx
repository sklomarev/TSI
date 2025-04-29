import { PureComponent } from 'react';

interface FooterProps {
}

interface FooterState {
}

class Footer extends PureComponent<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="flex justify-between items-start p-8 border-t border-white">
        <div className="text-lg font-semibold">Lavka</div>
        <div className="flex gap-16">
          <div className="text-center">
            <h3 className="font-semibold">Группа 1</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Группа 2</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Группа 3</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
              <li><a href="#" className="text-gray-300">Ссылка 1</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;