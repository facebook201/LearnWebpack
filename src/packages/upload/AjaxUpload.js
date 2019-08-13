import React from "react";
import { Component, PropTypes } from "../../../libs";
import ajax from "./ajax";

export default class AjaxUpload extends Component {
  static defaultProps = {
    name: 'file'
  };

  constructor(props: Object) {
    super(props);
  }

  isImage(str: string): boolean {
    return str.indexOf("image") !== -1;
  }

  handleClick(): void {
    if (!this.props.disabled) {
      this.refs.input.click();
    }
  }

  handleChange(event): void {
    if (event.target instanceof HTMLInputElement) {
      const files = e.target.files;
      if (!files) {
        return;
      }
      // 开始处理传过来的files
      this.uploadFiles(files);
      this.refs.input.value = null;
    }
  }

  render(): React.Element<any> {
    const { drag, multiple, accept, listType, disabled } = this.props;
    return (
      <div
        className='el-upload'
        onClick={() => this.handleClick()}
      >
        {this.props.children}
        <input
          className="el-upload__input"
          type="file"
          ref="input"
          onChange={e => this.handleChange(e)}
          multiple={multiple}
          accept={accept}
        />
      </div>
    );
  }
}
