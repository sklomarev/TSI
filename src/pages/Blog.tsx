import { PureComponent, ReactNode } from 'react';

interface BlogProps {
  // Define your props interface here if needed
  className?: string;
  children?: ReactNode;
}

interface BlogState {
  // Define your state interface here if needed
}

class Blog extends PureComponent<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);
    this.state = {};
  }

  render(): ReactNode {
    const { className = '', children } = this.props;

    return (
      <div className={`min-h-[130px] p-8 pl-32 ${className}`}>
        {children || 'блог'}
      </div>
    );
  }
}

export default Blog;