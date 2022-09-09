import { Component } from "react"
import styles from "./Feedback.module.scss"
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

const { btn__good, btn__negative, btn__neutral} = styles;

export class FeedbackComponent extends Component {
    state = {
            good: 0,
            neutral: 0,
            bad: 0,
          }

          positive = evt => {
            for (let i = 0; i <1; i+=1) {
            this.setState((prevState) =>{
                return {good: prevState.good + 1}})};
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage()
          }
          neutral = evt => {
            for (let i = 0; i <1; i+=1) {
            this.setState((prevState) => {
                return {neutral: prevState.neutral + 1}})};
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage()
          }
          negative = evt => {
            for (let i = 0; i <1; i+=1) {
            this.setState((prevState) => {
                return ({bad: prevState.bad + 1})})};
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage()
          }

          countTotalFeedback = evt => {
            this.setState(() => {
                return {
                    total: this.state.good + this.state.neutral + this.state.bad + 1}})
          }

          countPositiveFeedbackPercentage = () => {
            this.setState((prevState) => {
                return {
                    percentage: ((prevState.good/prevState.total)*100).toFixed(0)
                }
            }
            )
          }

           render() {
            const {good, neutral, bad, total, percentage} = this.state;
            return (
                <>
                <Section title="Please leave feedback">
                <FeedbackOptions options={this.positive} onLeaveFeedback="Good" className={btn__good}/>
                <FeedbackOptions options={this.neutral} onLeaveFeedback="Neutral" className={btn__neutral}/>
                <FeedbackOptions options={this.negative} onLeaveFeedback="Bad" className={btn__negative}/>
                </Section>
                <Section title="Statistics">
                  {this.total === undefined ? 
                  (<Notification message="There is no feedback given"/>)
                  :
                  (<Statistics 
                  good = {good}
                  neutral = {neutral}
                  bad = {bad}
                  total = {total}
                  percentage = {percentage}
                  />)}
                </Section>
                </>
            )
}}