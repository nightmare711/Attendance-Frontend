import React from 'react'
import styled, { css } from 'styled-components'
import { bg_3, TEXT_COLOR, TEXT_MAINCOLOR, bg_btn } from 'constants/theme'
import { useGetStudent } from 'queries/students.query'
import { listProfile } from 'constants/profile'

const ProFilePage = styled.div`
	padding: 30px;
	background: ${bg_3};
	color: ${TEXT_MAINCOLOR};
	width: 100%;
	font-weight: 100;
`
const HeadPro = styled.div`
	align-items: center;
	margin-bottom: 30px;
`
const TitlePro = styled.div`
	color: ${TEXT_COLOR};
	font-size: 25px;
`
const SubTitle = styled.div`
	display: flex;
	font-weight: 600;
	color: ${TEXT_COLOR};
`
const RightTitle = styled.div`
	font-weight: 100;
	margin-left: 5px;
	color: ${TEXT_MAINCOLOR};
`
const InfoProfile = styled.div`
	border: 1px solid #2e3840;
	background-color: #16191c;
	padding: 20px;
	display: flex;
`
const LeftInfo = styled.div`
	display: flex;
	align-items: center;

	float: left;
`
const RightInfo = styled.div`
	padding: 0 30px;
	margin: auto;
	border-left: 3px dashed ${TEXT_COLOR};
	float: left;
	display: flex;
	flex-direction: column;
`

const Image = styled.img`
	border-radius: 50%;
	width: 200px;
	height: 200px;
`
const SubInfo = styled.div`
	padding: 0 30px;
`
const InfoName = styled.div`
	font-size: 20px;
	color: #ff9b44;
`
const PositionInfo = styled.div``
const StaffId = styled.div`
	color: ${TEXT_COLOR};
	margin-top: 10px;
`
const BtnPro = styled.button`
	color: #fff;
	background: ${bg_btn};
	padding: 8px;
	border-radius: 5px;
	margin-top: 25px;
`
const ItemPro = styled.div`
	color: ${TEXT_COLOR};
	margin-bottom: 10px;
`
const LabelPro = styled.span`
	width: 150px;
	float: left;
`
const TextPro = styled.span`
	${(props) =>
		props.TextSpecial &&
		css`
			color: #007bff;
		`};
`
export const Profile = () => {
	const studentProfile = useGetStudent()
	return (
		<ProFilePage>
			<HeadPro>
				<TitlePro>Profile</TitlePro>
				<SubTitle>
					Dashboard<RightTitle>/ Profile</RightTitle>
				</SubTitle>
			</HeadPro>
			{studentProfile
				? studentProfile.map((profile) => (
						<InfoProfile>
							<LeftInfo>
								<Image src={profile.imgUrl} alt='Avatar' />
								<SubInfo>
									<TitlePro>Student</TitlePro>
									<InfoName>{profile.name}</InfoName>
									<PositionInfo>{profile._id}</PositionInfo>
									<StaffId>Student ID : {profile.studentId}</StaffId>
									<BtnPro
										onClick={() =>
											window.open('https://www.messenger.com/t/' + profile.idFB || '', '_blank')
										}
									>
										Send Message
									</BtnPro>
								</SubInfo>
							</LeftInfo>
							<RightInfo>
								<ItemPro>
									<LabelPro>Phone:</LabelPro>
									<TextPro TextSpecial>{profile.phoneNumber}</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Email:</LabelPro>
									<TextPro TextSpecial>{profile.email}</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Birthday:</LabelPro>
									<TextPro>{profile.dateOfBirth.toString()}</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Address: </LabelPro>
									<TextPro>Coming soon</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Gender:</LabelPro>
									<TextPro>Coming soon</TextPro>
								</ItemPro>
							</RightInfo>
						</InfoProfile>
				  ))
				: listProfile.map((item) => (
						<InfoProfile>
							<LeftInfo>
								<Image src={item.img} alt='Avatar' />
								<SubInfo>
									<TitlePro>{item.role}</TitlePro>
									<InfoName>{item.name}</InfoName>
									<PositionInfo>{item.position}</PositionInfo>
									<StaffId>Employee ID : {item.id}</StaffId>
									<BtnPro>Send Message</BtnPro>
								</SubInfo>
							</LeftInfo>
							<RightInfo>
								<ItemPro>
									<LabelPro>Phone:</LabelPro>
									<TextPro TextSpecial>{item.phone}</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Email:</LabelPro>
									<TextPro TextSpecial>{item.email}</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Birthday:</LabelPro>
									<TextPro>{item.birthday}</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Address:</LabelPro>
									<TextPro>{item.adress}</TextPro>
								</ItemPro>
								<ItemPro>
									<LabelPro>Gender:</LabelPro>
									<TextPro>{item.gender}</TextPro>
								</ItemPro>
							</RightInfo>
						</InfoProfile>
				  ))}
		</ProFilePage>
	)
}
