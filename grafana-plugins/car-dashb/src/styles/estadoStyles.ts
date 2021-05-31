import { stylesFactory } from '@grafana/ui';
import { css, } from 'emotion';


const getStyles = stylesFactory(() => {
  return {
    sinConexion: css`
      fill: #999;
    `,
    alarma: css`
      fill: red;
      
    `,
    ok: css`
      fill: green;
    `,
  };
});

const styles = getStyles();

export default styles;