import React from 'react';
import { Menu } from '@material-ui/core';

import OotIcon from './OotIcon';

class ItemMenu extends React.Component {
    render() {
        return (
            <Menu
                id="noKeysanityItems"
                anchorEl={this.props.anchorLocation}
                open={Boolean(this.props.anchorLocation)}
                onClose={this.props.handleClose}
                className={this.props.classes.locationItemMenu}
                TransitionProps={{ timeout: 0 }}
                disableScrollLock={true}
                classes={{paper: this.props.classes.itemMenuPaper}}
            >
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Deku Stick Capacity">
                        <OotIcon classes={this.props.classes} itemName="Deku Stick Capacity" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Deku Nut Capacity">
                        <OotIcon classes={this.props.classes} itemName="Deku Nut Capacity" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bomb Bag">
                        <OotIcon classes={this.props.classes} itemName="Bomb Bag" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bow">
                        <OotIcon classes={this.props.classes} itemName="Bow" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Fire Arrows">
                        <OotIcon classes={this.props.classes} itemName="Fire Arrows" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Dins Fire">
                        <OotIcon classes={this.props.classes} itemName="Dins Fire" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Kokiri Sword">
                        <OotIcon classes={this.props.classes} itemName="Kokiri Sword" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Master Sword">
                        <OotIcon classes={this.props.classes} itemName="Master Sword" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Biggoron Sword">
                        <OotIcon classes={this.props.classes} itemName="Biggoron Sword" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Slingshot">
                        <OotIcon classes={this.props.classes} itemName="Slingshot" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Ocarina">
                        <OotIcon classes={this.props.classes} itemName="Ocarina" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bombchu">
                        <OotIcon classes={this.props.classes} itemName="Bombchu" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Progressive Hookshot">
                        <OotIcon classes={this.props.classes} itemName="Progressive Hookshot" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Ice Arrows">
                        <OotIcon classes={this.props.classes} itemName="Ice Arrows" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Farores Wind">
                        <OotIcon classes={this.props.classes} itemName="Farores Wind" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Deku Shield">
                        <OotIcon classes={this.props.classes} itemName="Deku Shield" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Hylian Shield">
                        <OotIcon classes={this.props.classes} itemName="Hylian Shield" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Mirror Shield">
                        <OotIcon classes={this.props.classes} itemName="Mirror Shield" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boomerang">
                        <OotIcon classes={this.props.classes} itemName="Boomerang" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Lens of Truth">
                        <OotIcon classes={this.props.classes} itemName="Lens of Truth" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Magic Beans">
                        <OotIcon classes={this.props.classes} itemName="Magic Beans" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Megaton Hammer">
                        <OotIcon classes={this.props.classes} itemName="Megaton Hammer" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Light Arrows">
                        <OotIcon classes={this.props.classes} itemName="Light Arrows" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Nayrus Love">
                        <OotIcon classes={this.props.classes} itemName="Nayrus Love" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Progressive Strength Upgrade">
                        <OotIcon classes={this.props.classes} itemName="Progressive Strength Upgrade" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Goron Tunic">
                        <OotIcon classes={this.props.classes} itemName="Goron Tunic" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Zora Tunic">
                        <OotIcon classes={this.props.classes} itemName="Zora Tunic" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bottle">
                        <OotIcon classes={this.props.classes} itemName="Bottle" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bottle with Letter">
                        <OotIcon classes={this.props.classes} itemName="Bottle with Letter" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bottle with Big Poe">
                        <OotIcon classes={this.props.classes} itemName="Bottle with Big Poe" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bottle">
                        <OotIcon classes={this.props.classes} itemName="Bottle" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Adult Trade Item">
                        <OotIcon classes={this.props.classes} itemName="Adult Trade Item" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Child Trade Item">
                        <OotIcon classes={this.props.classes} itemName="Child Trade Item" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Progressive Scale">
                        <OotIcon classes={this.props.classes} itemName="Progressive Scale" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Iron Boots">
                        <OotIcon classes={this.props.classes} itemName="Iron Boots" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Hover Boots">
                        <OotIcon classes={this.props.classes} itemName="Hover Boots" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Zeldas Lullaby">
                        <OotIcon classes={this.props.classes} itemName="Zeldas Lullaby" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Eponas Song">
                        <OotIcon classes={this.props.classes} itemName="Eponas Song" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Sarias Song">
                        <OotIcon classes={this.props.classes} itemName="Sarias Song" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Sun Song">
                        <OotIcon classes={this.props.classes} itemName="Sun Song" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Song of Time">
                        <OotIcon classes={this.props.classes} itemName="Song of Time" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Song of Storms">
                        <OotIcon classes={this.props.classes} itemName="Song of Storms" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Progressive Wallet">
                        <OotIcon classes={this.props.classes} itemName="Progressive Wallet" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Magic Meter">
                        <OotIcon classes={this.props.classes} itemName="Magic Meter" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Gold Skulltula Token">
                        <OotIcon classes={this.props.classes} itemName="Gold Skulltula Token" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Minuet of Forest">
                        <OotIcon classes={this.props.classes} itemName="Minuet of Forest" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Bolero of Fire">
                        <OotIcon classes={this.props.classes} itemName="Bolero of Fire" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Serenade of Water">
                        <OotIcon classes={this.props.classes} itemName="Serenade of Water" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Requiem of Spirit">
                        <OotIcon classes={this.props.classes} itemName="Requiem of Spirit" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Nocturne of Shadow">
                        <OotIcon classes={this.props.classes} itemName="Nocturne of Shadow" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Prelude of Light">
                        <OotIcon classes={this.props.classes} itemName="Prelude of Light" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Gerudo Membership Card">
                        <OotIcon classes={this.props.classes} itemName="Gerudo Membership Card" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Stone of Agony">
                        <OotIcon classes={this.props.classes} itemName="Stone of Agony" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Piece of the Triforce">
                        <OotIcon classes={this.props.classes} itemName="Piece of the Triforce" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Forest Temple)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Forest Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Fire Temple)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Fire Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Water Temple)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Water Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Spirit Temple)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Spirit Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Shadow Temple)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Shadow Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Ganons Castle)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Ganons Castle)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Bottom of the Well)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Bottom of the Well)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Gerudo Training Ground)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Gerudo Training Ground)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (Gerudo Fortress)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (Gerudo Fortress)" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boss Key (Forest Temple)">
                        <OotIcon classes={this.props.classes} itemName="Boss Key (Forest Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boss Key (Fire Temple)">
                        <OotIcon classes={this.props.classes} itemName="Boss Key (Fire Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boss Key (Water Temple)">
                        <OotIcon classes={this.props.classes} itemName="Boss Key (Water Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boss Key (Spirit Temple)">
                        <OotIcon classes={this.props.classes} itemName="Boss Key (Spirit Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boss Key (Shadow Temple)">
                        <OotIcon classes={this.props.classes} itemName="Boss Key (Shadow Temple)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boss Key (Ganons Castle)">
                        <OotIcon classes={this.props.classes} itemName="Boss Key (Ganons Castle)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Silver Rupee">
                        <OotIcon classes={this.props.classes} itemName="Silver Rupee" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Small Key (???)">
                        <OotIcon classes={this.props.classes} itemName="Small Key (???)" className={this.props.classes.locationMenuIcon} />
                    </div>
                    <div onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="Boss Key (???)">
                        <OotIcon classes={this.props.classes} itemName="Boss Key (???)" className={this.props.classes.locationMenuIcon} />
                    </div>
                </div>
                <div className={this.props.classes.itemMenuRow}>
                    <div className={this.props.classes.itemMenuClear} onClick={this.props.handleFind} data-found-in={this.props.sourceLocation} data-found-item="">
                        <p className={this.props.classes.locationMenuClear}>Clear Item</p>
                    </div>
                </div>
            </Menu>
        );
    }
}

export default ItemMenu