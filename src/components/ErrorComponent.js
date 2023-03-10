import { Button, Result} from "antd"
import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary" onClick={() => window.location.reload()}>Back Home</Button>}
            />
        )
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary