import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  AvatarWrapper,
  AvatarInfo,
  TextSm,
  TextLg,
  LogoutButton,
  LogoutButtonText,
} from './styles';

import Avatar from '../../components/Avatar';
import { formatDate } from '../../utils/FormatDate';

import { signOut } from '../../store/modules/auth/actions';

const Profile: React.FC = () => {
  const { profile } = useSelector(state => state.user);

  const formattedDate = useMemo(() => formatDate(profile.createdAt), []);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <AvatarWrapper>
        <Avatar
          baseProfile={profile}
          containerWidth="100%"
          imageContainerWidth="183px"
          borderRadius="91.5px"
          alignCenter
        />
      </AvatarWrapper>
      <AvatarInfo>
        <TextSm>Nome Completo</TextSm>
        <TextLg>{profile.name}</TextLg>
        <TextSm>Email</TextSm>
        <TextLg>{profile.email}</TextLg>
        <TextSm>Data de cadastro</TextSm>
        <TextLg>{formattedDate}</TextLg>
        <LogoutButton onPress={handleLogout}>
          <LogoutButtonText>Logout</LogoutButtonText>
        </LogoutButton>
      </AvatarInfo>
    </Container>
  );
};

export default Profile;
