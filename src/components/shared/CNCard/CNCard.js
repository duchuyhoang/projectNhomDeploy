import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useCardStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.border.main}`,
    padding: "15px 15px 10px 15px",
    outline: "none",
    borderRadius: 6,
    backgroundColor: "#fff",
    boxShadow: "none"
  }
}))

const useCardContentStyles = makeStyles({
  root: {
    paddingBottom: 0,

    "&:last-child": {
      paddingBottom: 0,
    }
  }
})


const useCardActionsStyles = makeStyles((theme) => ({
  root: {
    marginLeft: -14,
    width: "calc(100% + 13px)",
    borderTop: `1px solid ${theme.border.main}`,
  }
}))




export const CNCard = ({ headerComponent, bodyComponent, footerComponent,...rest }) => {

  const cardStyles = useCardStyles()
  const cardContentStyles = useCardContentStyles();
  const cardActionsStyles = useCardActionsStyles();

  return (
    <Card classes={cardStyles} {...rest}>
      {headerComponent}
      <CardContent classes={cardContentStyles}>
        {bodyComponent}
      </CardContent>

      {footerComponent && <CardActions classes={cardActionsStyles}>
        {footerComponent}
      </CardActions>}

    </Card>
  )



}