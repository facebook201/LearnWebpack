import React from "react";
import { Component, PropTypes } from "../../../libs";
import AjaxUpload from './AjaxUpload'

export default class Upload extends Component {
  // 默认属性
  static defaultProps = {
    headers: {},
    name: "file",
    type: "select",
    listType: "text",
    fileList: [],
    autoUpload: true,
    disabled: false,
    onProgress() {},
    onSuccess() {},
    onError() {},
    onChange() {}
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      fileList: [],
      tempIndex: 1
    };
  }

  componentWillMount(): void {
    this.init(this.props);
  }

  init(props: Object): void {
    //
  }

  render() {
    const { fileList } = this.state;
    const { action, autoUpload, name, data, className, httpRequest} = this.props;

    const restProps = {
      autoUpload,
      action,
      ref: "upload-inner"
    };

    const uploadComponent = typeof FormData !== "undefined"
      ? <AjaxUpload key="AjaxUpload" {...restProps} />
      : null;
    return <div className={className}>{uploadComponent}</div>;
  }
}

Upload.childContextTypes = {
  onPreview: PropTypes.func,
  onRemove: PropTypes.func
};

Upload.propTypes = {
  action: PropTypes.string.isRequired
};
