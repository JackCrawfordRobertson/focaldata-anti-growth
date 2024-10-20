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
                    <BodyCopy htmlText="During her time as Prime Minister, Liz Truss criticised what she called the ‘anti-growth coalition’. Although Truss argued that this was comprised of groups the British right-wing have long had a negative view of (opposition parties, trade unions, the BBC, Remainers and climate change activists), the idea that there are forces actively working against policies to increase economic growth has gained support across the political spectrum.<br /><br /> One of Rachel Reeves’ first actions as Chancellor was to unveil plans for a ‘new era for economic growth’ and Keir Starmer has outlined how securing ‘the highest sustained growth in the G7’ is a key ‘national mission’ in power. Starmer also defined his own version of the anti-growth coalition, saying that his government would favour ‘the builders not the blockers’.<br /><br /> While these show pro-growth sentiments on the left and right, there is also evidence that support for anti-growth measures may cut across traditional political divides. On the left, this is most associated with the degrowth movement which argues that economic growth is environmentally unsustainable and socially problematic, so should be stopped or reversed. On the right, social conservatives have long argued that the policies needed for growth tend to undermine national identity, community cohesion and traditional hierarchies.<br /><br /> The last few years have seen debates related to economic growth on issues such as NIMBYism vs. YIMBYism, ‘AI Doomerism’ vs. ‘techno-optimism’, whether population decline is a good thing or a bad thing, the extent of human progress, the ‘abundance agenda’, ‘supply-side progressivism’ and ‘Conservative Futurism’, and increasing caution, worry and risk-aversion within the public.<br /><br /> This all gives reason to believe that there may well be both an ‘anti-growth’ and a ‘pro-growth’ coalition within public opinion, but also that this will not map neatly onto a standard economic left-right or social liberal-conservative spectrum. To test this, we ran a poll of 1,002 British respondents over 28-30 August 2024 with a series of questions to better understand the full spectrum of people’s beliefs.<br /><br />" />

                    {/* Section Header */}
                    <SubHead sectionNumber="2" title="What Do People Think “Economic Growth” Is?" />

                    <h3 className={styles.date}></h3>

                    <ThinkathonInstructions />

                    {/* More Body Copy */}
                    <BodyCopy
                        htmlText="We recently asked the public: ‘Politicians often talk about “economic growth.” What comes to mind when you hear this phrase?’ Using natural language processing, we identified nine common themes from the public’s responses. Your task is now to explore these themes and decide which ones you think the respondents prioritised as the most important.<br /><br /> 
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

                    <BodyCopy htmlText="There is a reasonably wide spread of answers. The most frequent was people mentioning something to do with national prosperity overall but without a specific indicator mentioned. The high percentage of respondents in this category suggests a broad but non-specific knowledge of what economic growth is." />

                    <PullQuote
                        text="“That the economy is going on the right path.”"
                        author="34 year old, white ethnicity, female, lives in South West England, 2024 Labour voter"
                    />

                    <PullQuote
                        text="“A more prosperous country””"
                        author="59 year old, white ethnicity, female, lives in Scotland, 2024 SNP voter"
                    />

                    <PullQuote
                        text="“Getting stronger and better off”"
                        author="37 year old, white ethnicity, female, lives in East Midlands, 2024 Labour voter"
                    />

                    <BodyCopy htmlText="Over 14% of respondents were able to give a particular economic indicator, such as GDP, productivity or exports. This was different from almost 12% of respondents who named increased employment specifically and the 10.6% who mentioned business expansion. <br /><br /> Notably, almost 11% of respondents gave an answer which indicated scepticism towards politicians and their claims about economic growth." />

                    <PullQuote
                        text="“Another meaningless political phrase”"
                        author="62 year old, white ethnicity, male, lives in South East England, 2024 Lib Dem voter"
                    />

                    <PullQuote
                        text="“I am fed up of listening this phrase from politicians because they are the destroyers””"
                        author="49 year old, Asian ethnicity, male, lives in West Midlands, 2024 Labour voter"
                    />

                    <PullQuote
                        text="“They may talk about growth but only serve to destroy the country’s economy””"
                        author="41 year old, white ethnicity, female, lives in South East England, did not vote in 2024"
                    />

                    <BodyCopy htmlText="There was also a high level of misunderstanding with almost 11% of respondents giving an answer that signalled that they weren’t sure what politicians meant when they said economic growth." />

                    <PullQuote
                        text="“I dont [sic] know as I dont [sic] pay attention to anything related to politics”"
                        author="36 year old, white ethnicity , female, lives in West Midlands, did not vote in 2024"
                    />

                    <PullQuote
                        text="“I hear it talked about but am not certain what it actually means”"
                        author="70 year old, white ethnicity, female, lives in Scotland, 2024 Conservative voter"
                    />

                    <PullQuote
                        text="“I have no idea about economics”"
                        author="49 year old, mixed ethnicity, male, lives in North West England, 2024 Labour voter"
                    />

                    <BodyCopy htmlText="This high number of respondents that were either cynical or unsure about economic growth indicates that there is a significant gap in public understanding and trust regarding economic policy and messaging." />

                    <SubHead sectionNumber="3" title="Growth Beliefs" />

                    <h3 className={styles.date}></h3>

                    <BodyCopy
                        htmlText="We then asked respondents to place their views between a series of two statements, with one being generally anti-growth and the other being its pro-growth opposite. These were created to cover beliefs on ‘growth’ broadly defined and capture the main debates on the subject.<br /><br /> <b> General: </b> Economic growth does more harm than good / Economic growth does more good than harm.<br /><br /> <b>Priority:</b> Politicians should focus more on issues such as climate change, immigration and crime – and talk less about increasing the UK’s economic growth rate / Politicians should focus more on increasing the UK’s economic growth rate – and talk less about issues such as climate change, immigration and crime.<br /><br /> <b>Population:</b> A reduction in the human population over the next 50 years would have mostly positive effects / A reduction in the human population over the next 50 years would have mostly negative effects.<br /><br /> Environment trade-off:</b> It is not possible to have high economic growth and strong laws to stop climate change. We need to choose one / It is possible to have high economic growth and strong laws to stop climate change. We do not need to choose one or the other.<br /><br /> <b>Technology optimism: </b>The increasing use of new technologies makes me pessimistic about the future / The increasing use of new technologies makes me optimistic about the future.<br /><br /> <b>Human progress: </b>In the history of humanity, now is the worst time there has ever been to be alive / In the history of humanity, now is the best time there has ever been to be alive <br /><br /> <b>YIMBY vs. NIMBY: </b>There are too many new homes being built in my local area / There are too few new homes being built in my local area.<br /><br /> <b>Zero sum: </b>People can only get rich at the expense of others / Wealth can grow so that there’s enough for everyone.<br /><br /> <b>Automation: </b>Automation and other new technologies will destroy many more jobs than they create / Automation and other new technologies will create many more jobs than they destroy <br /><br /> <b>Treasury brain: </b>Strict rules should have to be met before the government can increase spending or cut taxes, even if this caution harms economic growth / Governments should have more freedom to take risks when increasing spending or cutting taxes in order to try to increase economic growth.<br /><br /> <b>Rights: </b>I would rather live in a democratic country with very weak or non-existent economic growth / I would rather live in a non-democratic country with a very strong economic growth rate.<br /><br /> <b>Future: </b>Further economic growth will not make people happy or improve the important things in life / Further economic growth will unlock more of humanity's potential and improve people’s quality of life.<br /><br /> <b>Stress:</b> Economic growth leads to more stress and pressure in people's daily lives / Economic growth leads to more comfort and ease in people's daily lives.<br /><br /> <b>Innovation:</b> We should focus on making do with less rather than always wanting more / Constant innovation and progress is key to improving our lives.<br /><br /> <b>Old ways:</b> We should focus on preserving traditional industries and ways of working / We should embrace new industries and modern ways of working.<br /><br /> <b>Abundance:</b> We need to carefully limit the growth in housing, energy, and new technologies / We should be removing barriers in order to allow more housing, energy, and new technologies."
                    />

                    <h3 className={styles.date}>
                        Table 1: Statements asked to all respondents on a 11-point slider scale from 0 to 10. Randomised
                        question order.
                    </h3>

                    <BodyCopy htmlText="To check if these fit together as a single group, we created a correlation matrix with each question. The bigger the positive score means answers are more closely linked in the same direction." />

                    <Image
                        src="https://cdn.prod.website-files.com/6362df8dde9eba499868453f/67123269a6b8ce2bab7921f0_AD_4nXdVmTZOobxU4DdhT9ljn1OTmYNvLNS8cYwn_BgxFHC87pDWAl4i-rj4j6d2A-6Bswnn1MqTeMa21rH7D6pM0vtqvWKG7dZMAFB1wnRAt-8meEAsDiPZjvHUhfiQ3Gm-DJugiTi7bobmjKxK-6eKBnbh6kWh.png"
                        alt="Descriptive text about the image"
                        width={700}
                        height={450}
                        className={styles.image}
                    />

                    <BodyCopy htmlText="This shows a positive correlation between the answers to each statement, meaning that people who agree or disagree with one statement about growth are likely to hold similar beliefs with other statements. The pair of statements with the highest correlation (0.59) was between “Economic growth leads to more comfort and ease in people's daily lives” and “Further economic growth will unlock more of humanity's potential and improve people’s quality of life.” <br /><br />However, attitudes towards growth may just be another way of measuring traditional economic left-right values or social liberal-conservative values. To test this, we conducted a factor analysis with these growth statements along with the five economic and five social/cultural values questions used in the British Election Study (BES). This allows us to see whether growth attitudes form a distinct dimension of political beliefs, or whether they are just a different way to measure traditional divides." />

                    <Image
                        src="https://cdn.prod.website-files.com/6362df8dde9eba499868453f/671232838b13f6127aa33ebf_AD_4nXfFXVlwD6e-Be6tAc_r24F4eV6XSMyMcKp8BFjnG_ybwPMTmBmpEoq81gLvU0beEkJ7X2e3W9R3I_m46y72Gy3j2ezuTaNwZCn3UmYVcuUUtroeA5yXGgcgOIfu0bCDG-YpLNU1BugaCdGU1mQ81zqVanlG.png"
                        alt="Descriptive text about the image"
                        width={700}
                        height={450}
                        className={styles.image}
                    />

<BodyCopy htmlText="The above figure shows that there are three clear and distinct dimensions of political beliefs. Crucially, people’s beliefs on growth are almost always unrelated to their left-right economic or socially liberal-conservative beliefs. This suggests that views about the benefits and promise of growth form both an internally coherent belief system but also a belief system that is not simply reducible to long-standing political conflicts. <br /><br />The first factor (MR1) is the growth dimension, with the highest loadings (how strongly a question relates to an underlying pattern) on the statements 'The increasing use of new technologies makes me optimistic about the future' (0.67), 'Further economic growth will unlock more of humanity's potential and improve people’s quality of life' (0.66), and “Economic growth leads to more comfort and ease in people's daily lives” (0.64). These statements are the best at measuring people's underlying beliefs about growth. The second factor (MR2) is the traditional left-right economic BES questions and the third factor (MR3) is the traditional liberal-conservative social values BES scale.<br /><br /> A growth statement with a substantial relationship with another factor was “Wealth can grow so that there’s enough for everyone” which had a MR2 factor loading of -0.27. This means that higher agreement that wealth can grow for all generally means someone has right-wing economic beliefs. However, this statement’s MR1 growth factor loading was to a higher magnitude (0.55), meaning that it was more important for this dimension. Similarly, “I would rather live in a non-democratic country with a very strong economic growth rate” has a similar factor loading for MR1 (0.33) and MR3 (0.27), meaning that agreement is associated with social conservatism. However, again, the loading is higher for the growth dimension." />


                </div>
            </div>
        </div>
    );
};

export default Home;
