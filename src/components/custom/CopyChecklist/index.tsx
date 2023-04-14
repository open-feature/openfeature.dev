import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Remarkable } from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import styles from './styles.module.css';

/**
 * Renders a list of markdown items, and allows them to be copied to clipboard as raw markdown.
 */
export class CopyChecklist extends React.Component<{
  /**
   * An array of valid markdown strings to be listed as items in the checklist. 
   */
  items: string[];
}> {
  private md: Remarkable;

  constructor(props: { items: string[]; } | Readonly<{ items: string[]; }>){
    super(props);
    this.md = new Remarkable();
    this.md.renderer = new RemarkableReactRenderer();
  }

  override render() {
    return (
      <CopyToClipboard text={this.generateMd(this.props.items)}>
        <div style={{ position: 'relative' }}>
          <div>
            {this.props.items.map((i) => {
              return (
                <div key={i} className={styles.checklistItem}>
                  <input disabled type="checkbox" />
                  {this.md.render(i)}
                </div>
              );
            })}
          </div>
          <div className={styles.copyButton}>
            <div className={styles.copySvg}>
              <svg viewBox="0 0 24 24">
                <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
              </svg>
            </div>
            <div>Copy as Markdown</div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }

  private generateMd (items: string[]) {
    return items.reduce((acc, item) => {
      return acc + `- [ ] ${item}\n`;
    }, '');
  };
}
