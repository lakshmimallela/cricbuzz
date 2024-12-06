import React from "react";
import image from './Images/south-africa.webp'
import image1 from './Images/india-a.webp'
const Home =()=>{
    return(
        <div className="container bg-white shadow mt-2">
           <div className="">
                <h5 className="fw-bold">Afghanistan vs Bangladesh, 2nd ODI - Live Cricket Score, Commentary</h5>
                <p >
                <span className="me-3"><b>Series:</b><span className="venue">Afghanistan v Bangladesh in UAE,2024</span></span>
                <span  className="me-3"><b>Venue:</b><span className="venue">Sharjan Cricket Standium,Sharjan</span></span>
                <span><b>Date & Time:</b>Nov 09,02:00PM LOCAL</span>
                </p>
            </div>
        <ul className="nav nav-pills" id="pills-tab" role="tab">
             <li className="nav-item" role="presentation">
                 <button className="text-dark nav-link active" id="pills-Commentary-tab" data-bs-toggle="pill" data-bs-target="#pills-Commentary" type="button" role="tab" aria-controls="pills-Commentary" aria-selected="true">Commentary</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className=" text-dark nav-link" id="pills-Scorecard-tab" data-bs-toggle="pill" data-bs-target="#pills-Scorecard" type="button" role="tab" aria-controls="pills-Scorecard" aria-selected="false"> Scorecard</button>
            </li>
           <li className="nav-item" role="presentation">
               <button className="text-dark nav-link" id="pills-Squads-tab" data-bs-toggle="pill" data-bs-target="#pills-Squads" type="button" role="tab" aria-controls="pills-Squads" aria-selected="false"> Squads</button>
            </li>
            <li className="nav-item" role="presentation">
               <button className=" text-dark nav-link" id="pills-Highlights-tab" data-bs-toggle="pill" data-bs-target="#pills-Highlights" type="button" role="tab" aria-controls="pills-Highlights" aria-selected="false"> Highlights</button>
            </li>
            <li className="nav-item" role="presentation">
               <button className="text-dark nav-link" id="pills-FullCommentary-tab" data-bs-toggle="pill" data-bs-target="#pills-FullCommentary" type="button" role="tab" aria-controls="pills-FullCommentary" aria-selected="false">Full  Commentary</button>
            </li>
            <li className="nav-item" role="presentation">
               <button className="text-dark nav-link" id="pills-LiveBlog-tab" data-bs-toggle="pill" data-bs-target="#pills-LiveBlog" type="button" role="tab" aria-controls="pills-LiveBlog" aria-selected="false">Live Blog</button>
            </li>
            <li className="nav-item" role="presentation">
               <button className="text-dark nav-link" id="pills-MatchFacts-tab" data-bs-toggle="pill" data-bs-target="#pills-MatchFacts" type="button" role="tab" aria-controls="pills-MatchFacts" aria-selected="false">Match Facts </button>
            </li>
            <li className="nav-item" role="presentation">
               <button className="text-dark nav-link" id="pills-News-tab" data-bs-toggle="pill" data-bs-target="#pills-News" type="button" role="tab" aria-controls="pills-News" aria-selected="false">News</button>
            </li>
            <li className="nav-item" role="presentation">
               <button className="text-dark nav-link" id="pills-Photos-tab" data-bs-toggle="pill" data-bs-target="#pills-Photos" type="button" role="tab" aria-controls="pills-Photos" aria-selected="false">Photos</button>
            </li>
         </ul>
         <div className="col-lg-9 col-md-9 col-12  p-2">
              <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" style={{height:'1050px'}}  id="pills-Commentary" role="tabpanel" aria-labelledby="pills-Commentary-tab">
                       <div className="row">
                        <h5 className="text-muted">AUS 219/6 (20)</h5>
                       <span  className="me-3"><b className="fs-3">PAK 141/3(30.4)</b><span className="venue">&nbsp; &nbsp; CRR:4.58 &nbsp;&nbsp; REQ: 5.51</span></span>
                       <p className="fs-6 text-danger fw-bold p-2">Afghanistan need 101 runs</p>

                      <div>
     
                     </div>
                           <div href="Commentary" className="border col-12 col-md-8 col-lg-8 p-2" >
                        <table className="table" style={{width:'100%'}}>
                           <thead className="thead-dark"> 
                               <tr><th>Batter</th><th>R</th><th>B</th><th>4s</th><th>6s</th><th>SR</th></tr>
                            </thead>
                    
                               <tr><td className="text-info">Lalith Mohan *</td><td>0</td><td>3</td><td>0</td><td>0</td> <td>0.00</td></tr>
                               <tr><td className="text-info">Yara Sandeep</td><td>33</td><td>73</td><td>4</td><td>1</td><td>45.21</td></tr>
                              <thead className="thead-dark"> 
                               <tr>
                               <th>Bowler</th><th>O</th><th>M</th><th>R</th><th>W</th><th>ECO</th></tr></thead> 
                               <tr><td className="text-info">Rohit Rayudu *</td><td>19</td><td>2</td><td>54</td><td>0</td><td>2.84</td></tr>
                                <tr><td className="text-info">Aniketh Reddy</td><td>46</td><td>8</td><td>137</td><td>4</td><td>2.98</td></tr>

                         </table>
                         <p>Recent...| | |</p>
                    </div>

                     <div className=" border col-12 col-md-4 col-lg-4">
                            <div className="border">
                              <p className="bg-dark text-light">Key Status</p>
                            <div className="p-2">
                               <p><b>Partnership:</b>80(112)</p><p><b>Last Wtk:</b>Oliver Davies b Tanush Kotian 21(22) - 73/4 in 27.2 ov.</p><p><b>Last 10 overs:</b> 58 runs, 0 wkts</p>
                               <p><b>Toss:</b>Australia A (Bowling)</p>
                               </div>
                             </div>
                          </div>
                          <div>
                            <h6 className="mt-4"><b>Nathan Smith:</b> </h6>
                            <p> It was good fun, good time in the park with the boys, I thought we bowled well, but didn't help ourselves in the field. Personally, I thought I bowled well, getting rid of Joe Root was special, he's a classy batter. We judge ourselves with the chances we create and I thought we created quite a few. These guys bat positively and keeping a check on the run-rate was difficult. We'll have to come back tomorrow and start well.</p>
                           <h6><b>New Zealand catching in Tests in 2024</b></h6> 
                           <p>Catches taken: 109</p> 
                           <p>Dropped: 35</p>                    
                           <p>Their catch success rate of 75.7% is the second-lowest in Tests this year, only ahead of West</p>                    
                           <p>Indies’ 73.07%</p>                    
                           <h6 className=""><b>Harry Brook vs New Zealand</b> </h6>
                           <p>89 & 54 - Mount Maunganui, 2023</p>                    
                           <p>186 & 0 - Wellington, 2023</p>                    
                           <p>132* - Christchurch, 2024</p>
                           <h6 className=""><b> 18:30 Local Time, 05:30 GMT, 11:00 IST: Stumps, Day 2.</b> </h6>
                            <p> Dreadful day out in the field for New Zealand today and they'll be kicking themselves. As many as 5 catches went down and instead of being well ahead in the game having reduced England to 71/4 quite early in the day, they find themselves staring at a potentially large first-innings deficit. Plenty of chances were created, particularly in the first session and in the first hour after lunch but very few were converted. Once the ball got older though, England started picking them off and scoring became very easy. Nathan Smith bowled his heart out, he got the wickets of Bethell and Root early but got extremely unlucky thereafter.</p>                    
                          
                           </div>
                      <div className="col-3"></div>
                       </div>
                   </div>
                    <div className="tab-pane fade" style={{height:'1050px'}}  id="pills-ScoreCard" role="tabpanel" aria-labelledby="pills-ScoreCard-tab">
                    </div>
                  <div className="tab-pane fade"style={{height:'1050px'}}  id="pills-Squads" role="tabpanel" aria-labelledby="pills-Squads-tab">
                    <div className="justify-content-between d-flex p-2 m-2 rounded-3"  style={{backgroundColor:"lightblue"}}>
                        <span className="fw-bold"><img className="me-2  rounded-2" src={image} width={'30px'} alt="Australia flag"/>RSA</span>
                        <span className="fw-bold">INDIA<img className="ms-2 rounded-2 " src={image1}width={'30px'} alt="india flag"/></span>
                     </div>
              <div className="row"><h5 className="text-center fw-bold">Playing XI</h5>
                <div className="col-6">
                   <div>
                   <h6 className="squads">Ryan Rickelton</h6>
                      <p className="squads">Wk-Batter</p>
                     <h6 className="squads">Reeza Hendricks</h6>
                    <p className="squads">Batter</p>
                    <h6 className="squads">Aiden Markram(C)</h6>
                   <p className="squads">Batter</p>
                   <h6 className="squads">Tristan Stubbs</h6>
                  <p className="squads">Wk-Batter</p>
                  <h6 className="squads">Heinrich Klaasen(WK)</h6>
                    <p className="squads">Wk-Batter</p>
                    <h6 className="squads">David Miler</h6>
                    <p className="squads">Batter</p>
                    <h6 className="squads">Marco jansen</h6>
                    <p className="squads">Bowling Allrounder</p>
                      <h6 className="squads">Andile Simelane</h6>
                      <p className="squads">Bowler</p>
                      <h6 className="squads">Gerald Coetzee</h6>
                   <p className="squads">Bowler</p>
                   </div>
                   <div>
                    
                   </div>
                </div>
                <div className="col-6">
                <div>
                <h6 className="text-end squads">Ryan Rickelton</h6>
                 <p className="text-end squads">Wk-Batter</p>
                 <h6 className="text-end squads">Reeza Hendricks</h6>
                 <p className="text-end squads">Batter</p>
                 <h6 className="text-end squads">Aiden Markram(C)</h6>
                 <p className="text-end squads">Batter</p>
                  <h6 className="text-end squads">Tristan Stubbs</h6>
                   <p className="text-end squads">Wk-Batter</p>
                  <h6 className="text-end squads">Heinrich Klaasen(WK)</h6>
                   <p className="text-end squads">Wk-Batter</p>
                   <h6 className="text-end squads">David Miler</h6>
                    <p className="text-end squads">Batter</p>
                   <h6 className="text-end squads">Marco jansen</h6>
                   <p className="text-end squads">Bowling Allrounder</p>
                  <h6 className="text-end squads">Andile Simelane</h6>
                   <p className="text-end squads">Bowler</p>
                   <h6 className="text-end squads">Gerald Coetzee</h6>
                   <p className="text-end squads">Bowler</p>

                </div>
                <div>
            
                </div>
                </div>
                </div>
              </div>
         <div class="tab-pane fade" style={{height:'1050px'}}  id="pills-Highlights" role="tabpanel" aria-labelledby="pills-Highlights-tab">
             <button type="button" class="bg-success rounded-5 m-3 text-white">Preview</button>
            <button type="button" class="bg-success rounded-5 m-3 text-white">IND Inns</button>
            <button type="button" class="bg-success rounded-5 m-3 text-white">RSA Inns</button>

    <div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
               <li class="nav-item" role="presentation">
                <button class="nav-link active text-white bg-info rounded-5" id="pills-Aus1stinns-tab" data-bs-toggle="pill" data-bs-target="#pills-Aus1stinns" type="button" role="tab" aria-controls="pills-Aus1stinns" aria-selected="true">Aus 1st Inns</button>
              </li>&nbsp; &nbsp; &nbsp;
             <li class="nav-item" role="presentation">
             <button class="nav-link  text-white bg-info rounded-5" id="pills-Ind1stinns-tab" data-bs-toggle="pill" data-bs-target="#pills-Ind1stinns" type="button" role="tab" aria-controls="pills-Ind1stinns" aria-selected="false">Ind 1st Inns</button>
              </li>
           </ul>
          <div class="tab-content" id="pills-tabContent">
               <div class="tab-pane fade show active" id="pills-Aus1stinns" role="tabpanel" aria-labelledby="pills-Aus1stinns-tab">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                   <li class="nav-item" role="presentation">
                        <button class="nav-link active text-dark" id="pills-All-tab" data-bs-toggle="pill" data-bs-target="#pills-All" type="button" role="tab" aria-controls="pills-All" aria-selected="true">All</button>
                         </li>
                 <li class="nav-item" role="presentation">
                       <button class="nav-link text-dark" id="pills-Fours-tab" data-bs-toggle="pill" data-bs-target="#pills-Fours" type="button" role="tab" aria-controls="pills-Fours" aria-selected="false">Fours</button>
                 </li>
                <li class="nav-item" role="presentation">
                     <button class="nav-link text-dark" id="pills-Sixs-tab" data-bs-toggle="pill" data-bs-target="#pills-Sixs" type="button" role="tab" aria-controls="pills-Sixs" aria-selected="false">Sixs</button>
                </li>
               </ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-All" role="tabpanel" aria-labelledby="pills-All-tab">
    <div className="row">
      <div className="col-1">
        <p>50</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>
    <div className="row">
      <div className="col-1">
        <p>49</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-Fours" role="tabpanel" aria-labelledby="pills-Fours-tab">
  <div className="row">
      <div className="col-1">
        <p>50</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>

  </div>
  <div class="tab-pane fade" id="pills-Sixs" role="tabpanel" aria-labelledby="pills-Sixs-tab">
  <div className="row">
      <div className="col-1">
        <p>50</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>
  </div>
</div>

  </div>
  <div class="tab-pane fade" id="pills-Ind1stinns" role="tabpanel" aria-labelledby="pills-Ind1stinns-tab">
  
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active text-dark" id="pills-All-tab" data-bs-toggle="pill" data-bs-target="#pills-All" type="button" role="tab" aria-controls="pills-All" aria-selected="true">All</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link text-dark" id="pills-Fours-tab" data-bs-toggle="pill" data-bs-target="#pills-Fours" type="button" role="tab" aria-controls="pills-Fours" aria-selected="false">Fours</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link text-dark" id="pills-Sixs-tab" data-bs-toggle="pill" data-bs-target="#pills-Sixs" type="button" role="tab" aria-controls="pills-Sixs" aria-selected="false">Sixs</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-All" role="tabpanel" aria-labelledby="pills-All-tab">
    <div className="row">
      <div className="col-1">
        <p>50</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>
    <div className="row">
      <div className="col-1">
        <p>49</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-Fours" role="tabpanel" aria-labelledby="pills-Fours-tab">
  <div className="row">
      <div className="col-1">
        <p>50</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>

  </div>
  <div class="tab-pane fade" id="pills-Sixs" role="tabpanel" aria-labelledby="pills-Sixs-tab">
  <div className="row">
      <div className="col-1">
        <p>50</p>
      </div>
      <div className="col-10">
        <p>Azmatullah to Mahmudullah, out Mahmudullah Run Out!! 1 run completed. He can't. A pity. Drags the 
          full delivery to deep backward square-leg off a thick inside-edge and it's at best two, he tries to come back for the 2nd but the throw 
          is flat and hard next to the stumps to Gurbaz and he does the rest. Mahmudullah is well short. He ends on 98 and Bangladesh make 244. 
          Mahmudullah run out (Rahmat/Gurbaz) 98(98) [4s-7 6s-3]</p>
      </div>
    </div>
  </div>
</div>


  </div>
</div>
    </div>
  </div>

  
  <div class="tab-pane fade" style={{height:'1050px'}}  id="pills-FullCommentary" role="tabpanel" aria-labelledby="pills-FullCommentary-tab">
    <div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active text-white bg-info rounded-4 " id="pills-Preview-tab" data-bs-toggle="pill" data-bs-target="#pills-Preview" type="button" role="tab" aria-controls="pills-Preview" aria-selected="true">Preview</button>
  </li>&nbsp; &nbsp;
  <li class="nav-item" role="presentation">
    <button class="nav-link text-white bg-info rounded-4 " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Aus Inns</button>
  </li>&nbsp; &nbsp; &nbsp;
  <li class="nav-item" role="presentation">
    <button class="nav-link text-white bg-info rounded-4" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Ind Inns</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-Preview" role="tabpanel" aria-labelledby="pills-Preview-tab">
    <div className="row">
      <div className="col-3">
        <h5>MATCHE INFO</h5>
                    <p className="fw-bold fs-6">Match</p>
                      <p className="fw-bold fs-6">Date</p>
                    <p className="fw-bold fs-6">Toss</p>
                    <p className="fw-bold fs-6">Time</p>
                    <p className="fw-bold fs-6">Venue</p>
               </div>
      <div className="col-9">
        <p>The players are out in the middle. Farooqi had a forgettable match on Saturday. He got the ball to swing but was 
          erratic with his lines. He has the new ball in his hand. One slip in place and off we go..</p>
          <p><b>Mushtaq Ahmed | Bangladesh's spin consultant:</b> They (spinners) are all very good, Bangladesh's main strength is spin
             department, happy to work with them. (On Nasum) He was really impressive, he's got a great temperament. He's very clear 
             with his role. He gave us the momentum with the bat as well. 
            (On Rishad) He is a match-winner, he's tall. He's working on his wrong 'un and learning the art.</p>

      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="row">
      <div className="col-3">
        <h5>MATCHE INFO</h5>
                    <p className="fw-bold fs-6">Match</p>
                      <p className="fw-bold fs-6">Date</p>
                    <p className="fw-bold fs-6">Toss</p>
                    <p className="fw-bold fs-6">Time</p>
                    <p className="fw-bold fs-6">Venue</p>
               </div>
      <div className="col-9">
        <p>The players are out in the middle. Farooqi had a forgettable match on Saturday. He got the ball to swing but was 
          erratic with his lines. He has the new ball in his hand. One slip in place and off we go..</p>
          <p><b>Mushtaq Ahmed | Bangladesh's spin consultant:</b> They (spinners) are all very good, Bangladesh's main strength is spin
             department, happy to work with them. (On Nasum) He was really impressive, he's got a great temperament. He's very clear 
             with his role. He gave us the momentum with the bat as well. 
            (On Rishad) He is a match-winner, he's tall. He's working on his wrong 'un and learning the art.</p>

      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">  <div className="row">
      <div className="col-3">
        <h5>MATCHE INFO</h5>
                    <p className="fw-bold fs-6">Match</p>
                      <p className="fw-bold fs-6">Date</p>
                    <p className="fw-bold fs-6">Toss</p>
                    <p className="fw-bold fs-6">Time</p>
                    <p className="fw-bold fs-6">Venue</p>
               </div>
      <div className="col-9">
        <p>The players are out in the middle. Farooqi had a forgettable match on Saturday. He got the ball to swing but was 
          erratic with his lines. He has the new ball in his hand. One slip in place and off we go..</p>
          <p><b>Mushtaq Ahmed | Bangladesh's spin consultant:</b> They (spinners) are all very good, Bangladesh's main strength is spin
             department, happy to work with them. (On Nasum) He was really impressive, he's got a great temperament. He's very clear 
             with his role. He gave us the momentum with the bat as well. 
            (On Rishad) He is a match-winner, he's tall. He's working on his wrong 'un and learning the art.</p>

      </div>
    </div>
    </div>
</div>
    </div>

  </div>
  <div class="tab-pane fade" style={{height:'1050px'}}  id="pills-LiveBlog" role="tabpanel" aria-labelledby="pills-LiveBlog-tab">
    <div>
    There is no live blog for this match.
    </div>
  </div>
  <div class="tab-pane fade"style={{height:'1050px'}} id="pills-MatchFacts" role="tabpanel" aria-labelledby="pills-MatchFacts-tab">
    <div className="match">
      <h5 className="bg-dark p-2 text-light">Match Info</h5>
    <table>
      <tbody>
        <tr>
          <td><p><b>Match:</b></p></td>
          <td><p className="ps-5  facts">RSA vs IND, 2nd T20I, India tour of South Africa, 2024</p></td>
        </tr>
        <tr>
          <td><p><b>Date:</b></p></td>
          <td><p className="ps-5 facts">Sunday, November 10, 2024</p></td>
        </tr>
        <tr>
          <td><p><b>Toss:</b></p></td>
          <td><p className="ps-5 facts">South Africa won the toss and opt to bowl</p></td>
        </tr>
        <tr>
          <td><p><b>Time:</b></p></td>
          <td><p className="ps-5 facts">3:30 PM</p></td>
        </tr>
        <tr>
          <td><p><b>Venue:</b></p></td>
          <td><p className="ps-5 facts">St George's Park, Gqeberha</p></td>
        </tr>
        <tr>
          <td><p><b>Umpires:</b></p></td>
          <td><p className="ps-5 facts">Arno Jacobs, Lubabalo Gcuma</p></td>
        </tr>
        <tr>
          <td><p><b>Third Umpire:</b></p></td>
          <td><p className="ps-5 facts">Allahudien Paleker</p></td>
        </tr>
        <tr>
          <td><p><b>Match Referee:</b></p></td>
          <td><p className="ps-5 facts">Andy Pycroft</p></td>
        </tr>
        <tr>
          <td><p><b>South Africa Squad:</b></p></td>
          <td><p>{}</p></td>
        </tr>
        <tr>
          <td><p><b>Playing:</b></p></td>
          <td><p className="ps-5 facts">Ryan Rickelton, Reeza Hendricks, Aiden Markram (c), Tristan Stubbs, Heinrich Klaasen (wk), David Miller, Marco Jansen, Andile Simelane, Gerald Coetzee, Keshav Maharaj, Nqabayomzi Peter</p></td>
        </tr>
        <tr>
          <td><p><b>Support Staff:</b></p></td>
          <td><p className="ps-5 facts">Mihlali Mpongwana, Donovan Ferreira, Ottneil Baartman, Patrick Kruger</p></td>
        </tr>
        <tr>
          <td><p><b>India Squad:</b></p></td>
          <td><p className="ps-5 facts">Shukri Conrad, Imraan Khan, Piet Botha, Kruger van Wyk</p></td>
        </tr>
        <tr>
          <td><p><b>Playing:</b></p></td>
          <td><p>{}</p></td>
        </tr>
        <tr>
          <td><p><b>Bench:</b></p></td>
          <td><p className="ps-5 facts">Sanju Samson (wk), Abhishek Sharma, Suryakumar Yadav (c), Tilak Varma, Hardik Pandya, Rinku Singh, Axar Patel, Arshdeep Singh, Ravi Bishnoi, Varun Chakaravarthy, Avesh Khan</p></td>
        </tr>
        <tr>
          <td><p><b>Support Staff::</b></p></td>
          <td><p className="ps-5 facts">Jitesh Sharma, Vijaykumar Vyshak, Ramandeep Singh , Yash Dayal</p></td>
        </tr>

      </tbody>
    </table>
    </div>
  </div>
  <div class="tab-pane fade" style={{height:'1050px'}}  id="pills-News" role="tabpanel" aria-labelledby="pills-News-tab">
    <div>
    <div className="col-12">
    <div className="row mt-4">
      <div className="col-lg-3 col-md-4 col-12">
        <div>
          <img className="rounded-2" src="https://static.cricbuzz.com/a/img/v1/205x152/i1/c571526/pacers-shine-again-to-restrict.jpg" width={"100%"} alt="restricet"/>
        </div>
      </div>
      <div className="col-lg-9 col-md-8  col-12">
        <p className="text-secondary">PAKISTAN TOUR OF AUSTRALIA, 2024</p>
        <h5> <b> <a href="#" className="text-decoration-none">Pacers set up Pakistan's stunning series win</a></b>
        </h5>
        <p>Australia were poor with the bat again and were bowled out for just 140</p>
        <p>1h ago</p>
      </div>
    </div>

    </div>
    </div>
    <div>
    <div className="col-12">
    <div className="row mt-4">
      <div className="col-lg-3 col-md-4 col-12">
        <div>
          <img className="rounded-2" src="https://static.cricbuzz.com/a/img/v1/205x152/i1/c581684/kemar-roach-triggered-a-new-ba.jpg" width={"100%"} alt="restricet"/>
        </div>
      </div>
      <div className="col-lg-9 col-md-8  col-12">
        <p className="text-secondary">BANGLADESH TOUR OF WEST INDIES, 2024</p>
        <h5> <b> <a href="#" className="text-decoration-none">Roach, Seales put West Indies on the brink despite Taskin's six-fer</a></b>
        </h5>
        <p>Taskin Ahmed picked up six wickets in the second innings .</p>
        <p>6h ago</p>
      </div>
    </div>

    </div>
    </div>
  </div>
  <div class="tab-pane fade" style={{height:'1050px'}}  id="pills-Photes" role="tabpanel" aria-labelledby="pills-Photes-tab">
    <div>
    There is no Photes for this match.
    </div>
  </div>
</div>
</div>
 </div>
        
  
    )
}
export default Home 
               
              
   