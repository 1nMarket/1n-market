import React from 'react'
import ProfileHeader from '../../components/common/Header/ProfileHeader'
import * as S from './style';

const Chat = () => {
  return (
    <>
        <ProfileHeader/>
        <S.Content>
          <S.ChatList>

            <S.ChatItem>
              <S.IconDiv>
                <S.BasicProfileIcon/>
                <S.NewChatMark/>
              </S.IconDiv>

              <S.ChatUserName>애월읍 위니브 감귤농장</S.ChatUserName>
              <S.ChatContent>이번에 정정 언제하맨마씸?</S.ChatContent>
              <S.ChatDate>2020.10.25</S.ChatDate>
            </S.ChatItem>

            <S.ChatItem>
              <S.IconDiv>
                <S.BasicProfileIcon/>
                <S.NewChatMark/>
              </S.IconDiv>

              <S.ChatUserName>제주감귤마을</S.ChatUserName>
              <S.ChatContent>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...</S.ChatContent>
              <S.ChatDate>2020.10.25</S.ChatDate>
            </S.ChatItem>

            <S.ChatItem>
              <S.BasicProfileIcon/>

              <S.ChatUserName>누구네 농장 친환경 한라봉</S.ChatUserName>
              <S.ChatContent>내 차는 내가 평가한다. 오픈 이벤트에 참여 하...</S.ChatContent>
              <S.ChatDate>2020.10.25</S.ChatDate>
            </S.ChatItem>

          </S.ChatList>
        </S.Content>
    </>
  )
}

export default Chat
