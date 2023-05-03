import Tippy from '@tippyjs/react/headless'; 
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
              offset={[30, -10]}
              render={attrs => (
                <div className={styles.contentMenu} tabIndex={parseInt("-1")} {...attrs}>
                    <ul className={styles.titleSetting}>
                      <Wrapper>
                        {items.map((item, index) => 
                            <li key={index}><a href={item.link}>{item.title}</a></li>
                        )}
                      </Wrapper>
                    </ul>
                </div>
              )}
            >
              {children}
            </Tippy>
     );
}

export default MenuSetting;