import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./app.css";

const FAQ = ({ setSelectedLink }) => {
  useEffect(() => {
    window.scroll(0, 0);
    setSelectedLink(2);
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
      background: "rgb(50,74,89)",
      color: "rgb(220,220,220)",
      fontWeight: "600",
      letterSpacing: ".5px",
    },
    body: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      background: "rgb(50,74,89)",
      color: "white",
    },
  }));
  const classes = useStyles();
  return (
    <div className="faq-page-container">
      <div className="faq-line-item">
        <Accordion className={classes.body}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What is the account size I should have to begin thinking about selling Puts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              An account with $10,000 can get you started, $50,000 is more ideal and $100k is the
              preferred starting account size - Having an account under $100,000 reduces the playing
              field on the equities we can write against. Remember, you are working with your own
              brokerage account, and you are the one placing your own trades.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.body}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              You did over 20% realized in the first month of 2021, is that normal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Normal no, that has come through an extreme bull market. It is my goal, to educate you
              on how to take advantage of every market condition- we have great months, and we try
              and minimize the losing months as best as we can- because everyone goes through a bad
              month or two.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.body}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What are your thoughts on Covered Calls?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I love them! I traded them for a long time and I always tell people, “when selling a
              covered call, it’s a beautiful thing when your stock gets called away, that means you
              made max profit when you made the trade. You cant think about the missed upside if
              you’re not a growth investor, and growth investors should not be writing options,
              calls, or puts!” I just found my personal performance was significantly better selling
              puts. I also found that even covered call writers had rarely ventured into selling
              puts, they just never explored it very much. I should add, in many circumstances when
              I am assigned the stock if my trade is put to me, I will write a covered call and take
              income that way. You will see, when we are "put" a stock, I will tell you the covered
              call I am writing or if I am selling the equity altogether.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.body}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Do you use any advanced options strategies?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I have, and I do when I am speculating, gets my cost basis down- but ThePutsGuys is
              for income generation. But if anyone wants to use the income from selling a put to buy
              a call on the same equity, or simply want to buy stock with the income from the Put
              sale, that is up to each person. Bullish Put Spreads are a fantastic instrument, when
              used correctly and for the right purpose.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.body}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What percent of your account do you place in one trade?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              That’s something we discuss when you become a member - I will say, I am extremely
              careful about the unforeseen event that will drop the markets to limit down out of the
              blue- those types of days do come and they wreck accounts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.body}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Is our trading account with you? Are you making the actual trades for us? If no, what
              brokerage should I use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You make the trades; there are videos embedded in the site that show you the simple
              process of “Sell to Open” and “Buy to Close” Your membership gives you instant access
              to my trades, my watchlist, and my list of equities that I focus the most on when
              looking for the best premiums and trades. You also get a consultation where we can
              discuss your personal trading goals. Pick a brokerage that has the lowest commissions,
              after that, look for the ones that get the best trade fills on your limit orders.
              Nothing worse than putting in an order and seeing someone else got filled for the same
              price as you and you got left out. The more well-established sites typically are the
              way to go.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.body}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Does Warren Buffett do this?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1988 wasn’t just a phenomenal year for the Lakers and Dodgers, that year, Buffett made
              $7.5 million selling puts on one of his favorite investments, Coca-Cola! Buffett built
              his fortune on being an insurer! You receive your premiums (income) upfront when you
              (buy to open) and if an “insurance claim” is needed, you pay the claim out (buy buying
              the stock at the strike price)- Selling puts really is like selling insurance to the
              person who is buying the put. The put buyer is protecting their investments from a
              downturn in the market,(some are buying as a way to short a company, or cut back on
              some losses)-
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
