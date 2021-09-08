// imports the React Javascript Library
import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import Fab from "@material-ui/core/Fab";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

//Tabs
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  TextField:{
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "red"
    },
  },
  cardHeader: {
    textalign: "center",
    align: "center",
    backgroundColor: "white"
  },
  input: {
    display: "none"
  },
  title: {
    color: '#a38350',
    fontWeight: "bold",
    fontFamily: "Montserrat",
    align: "center"
  },
  button: {
    color: '#a38350',
    margin: 10
  },
  secondaryButton: {
    color: "gray",
    margin: 10
  },
 

 
 
});

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
    }
  state = {
    mainState: "initial", // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null
  };

  handleUploadClick = event => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
     // Would see a path?

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
    
  };

  renderInitialState() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
        <>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              name="profile_pic"
              type="file"
              onChange={(e)=>{this.handleUploadClick(e); this.props.setForm(e)}}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          
        </>
      
    );
  }

  
  handleAvatarClick(value) {
    var filename = value.url.substring(value.url.lastIndexOf("/") + 1);
    this.setState({
      mainState: "uploaded",
      imageUploaded: true,
      selectedFile: value.url,
      fileReader: undefined,
      filename: filename
    });
  }

  
  renderUploadedState() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}>
          <img
            width="100%"
            className={classes.media}
            src={this.state.selectedFile}
          />
        </CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = event => {
    this.setState({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          
            {(this.state.mainState == "initial" && this.renderInitialState()) ||
              (this.state.mainState == "search" && this.renderSearchState()) ||
              (this.state.mainState == "gallery" &&
                this.renderGalleryState()) ||
              (this.state.mainState == "uploaded" &&
                this.renderUploadedState())}
         
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUpload);
