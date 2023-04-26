import Tippy from '@tippyjs/react';
import styles from './Menu.module.css'
import { Wrapper } from '..';

interface MenuItem {
    title: string;
    link: string;
}
interface Props {
    children: React.ReactElement;
    items: MenuItem[];
}
function MenuSetting({ children, items}: Props) {

    if (!children) {
        return null;
      }
    return ( 
        <Tippy 
              interactive
              placement="right"
              offset={[30, 30]}
              render={attrs => (
                <div className={styles.content} tabIndex={parseInt("-1")} {...attrs}>
                  <Wrapper>
                    <ul className={styles.titleSetting}>
                        {items.map((item, index) => 
                            <li key={index}><a href={item.link}>{item.title}</a></li>
                        )}
                    </ul>
                  </Wrapper>
                </div>
              )}
            >
              {children}
            </Tippy>
     );
}

export default MenuSetting;