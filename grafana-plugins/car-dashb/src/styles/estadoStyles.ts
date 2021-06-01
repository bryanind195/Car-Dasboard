import { stylesFactory } from '@grafana/ui';
import { css} from 'emotion';


const getStyles = stylesFactory (() => {
  return {
    apagado: css`
      fill: red;
    `,
    
    on: css`
      fill: green;
      
    `,
    
  }

  
})
const styles = getStyles();

export default styles;
