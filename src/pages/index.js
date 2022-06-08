import * as React from "react"
import Login from '../assets/login.mp4'
import styled from "styled-components";
import "@fontsource/roboto"


const Container = styled.div`
width: 800px;
font-family: "Roboto";
`



// markup
const IndexPage = () => {
  return (
      <Container>
        <h1>Introduction</h1>

        <p>Van Cal is a Web application I built to demonstrate my web development skills. It solves a
          real world problem I encountered in running my own removals business. The solution
          provides an integrated booking and invoicing application for removals companies. I have
          generalised the application to be a SAAS application. Any removal company can create their
          own account in the application or sign in with their google account and create and manage
          their own data.
        </p>

        <h1>The Pre-Existing Solution</h1>

        <p>Prior to VanCal I Used Google Calendar to manage my bookings , it has some great features
          but also some drawbacks.</p>

        <h2>Google Calendar : Pros</h2>

        <ul>
          <li>It allows colleagues to share their calendars</li>
          <li>I can view colleagues availability in the same place that I make my bookings.</li>
          <li>I can invite colleagues to events and see clearly when they have accepted the invite.</li>
          <li>the week view has a very nice layout which communicates a lot of info at a glance and
            helps with scheduling new bookings
          </li>
        </ul>

        <h2>Google Calendar : Cons</h2>

        <ul>
          <li>More or less all the information for the booking goes in one field. i need more
            atomicity with certain pieces of data e.g. storing the bill amount.
          </li>
          <li>The lack of atomic fields means i also need to maintain a seperate spread sheet of
            bookings to keep records and manage invoicing
          </li>
          <li>this leads to a lot of duplicated data and the following associated problems
            <ul>
              <li>wastes time</li>
              <li>increased chance of errors</li>
              <li>fall behind with record keeping</li>
            </ul>
          </li>
          <li>google calendar is not an extensible solution, a custom application could solve the problems associated with
            Google calendar as well as make new functionality in other
            domains possible and further increase productivity
          </li>
        </ul>



        <h2>The solution</h2>

        <h2>Summary</h2>
        <p>
          VanCal is a full stack application with react on the front end and an express.js api
          on the backend. The express.js application uses mongoDb for the data storage solution.
          I will be adding an extensive article in the near future about the technologies Van
          Cal, uses.
        </p>

        <p>
          Van Cal has all the positives of Google calendar but none of the draw backs.
          it has a calendar view similar to the week view of google calendar.
          When making booking the data is recorded at the right level of atomicity and the
          information captured during the booking process can be used for record keeping for the
          business.
        </p>

        <p>
          Van Cal integrates with Google calendar. A user can authorise VanCal to view event
          data from Google calendar this can then be viewed on the calendar view on VanCal to
          still provide all the benefits of google calendar.
        </p>

        <p>
          There is a list view with a table of all the bookings that can be used for managing
          invoicing. the list can be filtered to see what bookings have not been invoiced yet.
          the user can then go into a page for managing the individual bookings and generate an
          invoice which will be stored in the backend of the application they can also email
          invoice from the application.
        </p>



        <h1>A walk through VanCal</h1>


        <h2>login</h2>

          <video controls width="800px">
              <source src={Login} type="video/mp4" />
          </video>

      </Container>
      )




}

export default IndexPage
