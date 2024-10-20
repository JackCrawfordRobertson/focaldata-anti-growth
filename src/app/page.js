"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles/Page.module.css";

// Components
import BodyCopy from "../app/components/BodyCopy";
import PullQuote from "../app/components/PullQuote";
import SubHead from "../app/components/SubHead";

//games

import Game from "./charts/Game1/Game"; // adjust the path based on your file structure
import ThinkathonInstructions from "./charts/Game1/ThinkathonInstructions";

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.body}>
                    {/* Main Title */}
                    <h1 className={styles.mainTitle}>Bi_Focal #20: Is there an anti-growth coalition in Britain?</h1>
                    <h3 className={styles.date}>October 18, 2024</h3>

                    {/* Body Copy Component */}
                    <BodyCopy htmlText="With the Labour government’s focus on increasing economic growth, in this blog post we examine whether there actually is (in Liz Truss’s words) an ‘anti-growth coalition’ within public opinion and whether there is a corresponding ‘pro-growth coalition’. We asked the British public its opinions on economic growth, technological change and human progress to see how these beliefs map – and don’t map – onto existing political divides. We find that growth attitudes form a distinct dimension of political beliefs, separate from traditional left-right economic or liberal-conservative cultural divides. There is indeed evidence of both pro- and anti-growth sentiments, but these cut across party lines. Labour and (to a lesser extent) Conservative voters are the most pro-growth, while non-voters, Reform UK and Green Party supporters show the strongest anti-growth leanings." />

                    <PullQuote
                        text="“Occupation also plays a crucial role, with higher managerial and professional workers being the most pro-growth, but skilled manual workers notably anti-growth.”"
                        author="James Breckwoldt"
                    />

                    {/* Image Component */}
                    <Image
                        src="https://cdn.prod.website-files.com/6362df8dde9eba499868453f/67122ef7d2f55a8d1c0c6c74_53837332399_28e4ba844d_k-p-1600.jpg"
                        alt="Descriptive text about the image"
                        width={700}
                        height={450}
                        className={styles.image}
                    />

                    {/* Section Header */}
                    <SubHead sectionNumber="1" title="Pro- and Anti-Growth Coalitions" />

                    <h3 className={styles.date}></h3>

                    {/* More Body Copy */}
                    <BodyCopy
                        htmlText="During her time as Prime Minister, Liz Truss criticised what she called the ‘anti-growth coalition’. Although Truss argued that this was comprised of groups the British right-wing have long had a negative view of (opposition parties, trade unions, the BBC, Remainers and climate change activists), the idea that there are forces actively working against policies to increase economic growth has gained support across the political spectrum.<br /><br />

One of Rachel Reeves’ first actions as Chancellor was to unveil plans for a ‘new era for economic growth’ and Keir Starmer has outlined how securing ‘the highest sustained growth in the G7’ is a key ‘national mission’ in power. Starmer also defined his own version of the anti-growth coalition, saying that his government would favour ‘the builders not the blockers’.<br /><br />

While these show pro-growth sentiments on the left and right, there is also evidence that support for anti-growth measures may cut across traditional political divides. On the left, this is most associated with the degrowth movement which argues that economic growth is environmentally unsustainable and socially problematic, so should be stopped or reversed. On the right, social conservatives have long argued that the policies needed for growth tend to undermine national identity, community cohesion and traditional hierarchies.<br /><br />

The last few years have seen debates related to economic growth on issues such as NIMBYism vs. YIMBYism, ‘AI Doomerism’ vs. ‘techno-optimism’, whether population decline is a good thing or a bad thing, the extent of human progress, the ‘abundance agenda’, ‘supply-side progressivism’ and ‘Conservative Futurism’, and increasing caution, worry and risk-aversion within the public.<br /><br />

This all gives reason to believe that there may well be both an ‘anti-growth’ and a ‘pro-growth’ coalition within public opinion, but also that this will not map neatly onto a standard economic left-right or social liberal-conservative spectrum. To test this, we ran a poll of 1,002 British respondents over 28-30 August 2024 with a series of questions to better understand the full spectrum of people’s beliefs.<br /><br />"
                    />



                    {/* Section Header */}
                    <SubHead sectionNumber="2" title="What Do People Think “Economic Growth” Is?" />

                    

                    <h3 className={styles.date}></h3>

                    <ThinkathonInstructions />


                    {/* More Body Copy */}
                    <BodyCopy
                        htmlText="We recently asked the public:
‘Politicians often talk about “economic growth.” What comes to mind when you hear this phrase?’
Using natural language processing, we identified nine common themes from the public’s responses. Your task is now to explore these themes and decide which ones you think the respondents prioritised as the most important.

<br /><br /> 
                        <b>Economic Indicators:</b> Responses that mention a specific indicator of economic growth or prosperity.<br /><br />
                        <b>National Prosperity: </b>A general reference to overall national prosperity or the avoidance of economic decline.<br /><br />
                        <b>Individual Prosperity: </b>Mentions of increased individual purchasing power or an improved cost of living.<br /><br />
                        <b>Employment Growth:</b>References to job creation or lowering unemployment.<br /><br />
                        <b>Business Expansion: </b>Mentions of business growth or higher company revenue and profits.<br /><br />
                        <b>Public Services/Finances:</b> References to growth meaning a greater ability of governments to spend without debt, particularly on public services.<br /><br />
                        <b>Wealth Distribution: </b>References to concerns about an unequal distribution of economic growth.<br /><br />
                        <b>Political Scepticism: </b>Responses expressing scepticism towards politicians’ economic claims or responses describing ‘economic growth’ as meaningless.<br /><br />
                        <b>General Confusion:</b>Responses indicating confusion about the term “economic growth”.<br /><br />
"
                    />

                    <Game />

                    {/* Section Header */}
                    <SubHead sectionNumber="3" title="Intersection of Education and Ethnicity in Politics" />

                    <h3 className={styles.date}>Drag the slider to filter by political party</h3>

                    <BodyCopy htmlText="The connection between education and ethnicity within the UK's political environment reveals a complex voter landscape ahead of the 2024 general election. Based on our polling data, individuals from ethnic minority backgrounds with higher education levels gravitate towards parties like the Labour Party, aligning educational attainment with political ideologies centered on social equality and inclusivity.<br /><br />Conversely, the Conservative Party garners support across diverse educational and ethnic demographics, suggesting its broader appeal might be rooted in traditional values or economic policies. This intricate interplay highlights the multifaceted nature of British voters and the importance of inclusive, political engagement." />

                    {/* Final Section Headers and Copy */}
                    <SubHead sectionNumber="4" title="The Role of Policy and Campaign Messaging" />
                    <h3 className={styles.date}>Drag the slider to filter policy questions</h3>
                    <BodyCopy htmlText="The above visualisation shows the average answer from the case study participants, with the first question being at the centre of the chart and the second on the outside. From the case study data set, the intricate dance of policy and campaign messaging takes on a crucial role, especially in engaging the diversity of the 2024 British voting population. Political parties are keenly refining their strategies, aiming to connect deeply with various educational and ethnic groups. Insights reveal a landscape where tailored policies not only resonate but are pivotal in forging voter loyalty and engagement." />

                    <SubHead sectionNumber="5" title="Future Implications, Recommendations and Conclusions" />
                    <BodyCopy htmlText="The findings from this analysis underscore the impact of education and identity on voter preferences and political engagement in the United Kingdom. As the nation's electorate grows increasingly diverse, it is crucial for political parties, policymakers, and civic organisations to adapt and foster a political dialogue that respects and represents the varied needs and perspectives of everyone." />

                    {/* Final Pull Quote */}
                    <PullQuote
                        text="“Focaldata online polling of 2,700 respondents in United Kingdom. Data is weighted by age, gender, education, race, and more..."
                        author="Written by the Focaldata Team"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
