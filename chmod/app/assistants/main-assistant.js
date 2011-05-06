
function MainAssistant()
{
}


MainAssistant.prototype.setup = function()
{
    Mojo.Log.info("setup...");
	
	this.appMenuAttr = {omitDefaultItems: true};
	this.appMenuModel = {
		items: [
			{label: "Help", command: Mojo.Menu.helpCmd}
		]
	};

	this.controller.setupWidget(Mojo.Menu.appMenu, this.appMenuAttr, this.appMenuModel);

    /* this function is for setup tasks that have to happen when the scene is first created */
    this.mask = {
        user: 0,
        group: 0,
        other: 0,
		stickyBit: 0
    };
    this.umask = {
        user: 7,
        group: 7,
        other: 7
    };
    
    /* use Mojo.View.render to render view templates and add them to the scene, if needed. */
    
    /* setup widgets here */
    
    /* add event handlers to listen to events from widgets */
    this.controller.setupWidget("togUserReadId", this.togUserReadAttrib = {
        trueLabel: '+r',
        falseLabel: '-r'
    }, this.togUserReadModel = {
        disabled: false
    });
    this.controller.setupWidget("togUserWriteId", this.togUserWriteAttrib = {
        trueLabel: '+w',
        falseLabel: '-w'
    }, this.togUserWriteModel = {
        disabled: false
    });
    this.controller.setupWidget("togUserExecuteId", this.togUserExecuteAttrib = {
        trueLabel: '+x',
        falseLabel: '-x'
    }, this.togUserExecuteModel = {
        disabled: false
    });
    this.controller.setupWidget("togGroupReadId", this.togGroupReadAttrib = {
        trueLabel: '+r',
        falseLabel: '-r'
    }, this.togGroupReadModel = {
        disabled: false
    });
    this.controller.setupWidget("togGroupWriteId", this.togGroupWriteAttrib = {
        trueLabel: '+w',
        falseLabel: '-w'
    }, this.togGroupWriteModel = {
        disabled: false
    });
    this.controller.setupWidget("togGroupExecuteId", this.togGroupExecuteAttrib = {
        trueLabel: '+x',
        falseLabel: '-x'
    }, this.togGroupExecuteModel = {
        disabled: false
    });
    this.controller.setupWidget("togOtherReadId", this.togOtherReadAttrib = {
        trueLabel: '+r',
        falseLabel: '-r'
    }, this.togOtherReadModel = {
        disabled: false
    });
    this.controller.setupWidget("togOtherWriteId", this.togOtherWriteAttrib = {
        trueLabel: '+w',
        falseLabel: '-w'
    }, this.togOtherWriteModel = {
        disabled: false
    });
    this.controller.setupWidget("togOtherExecuteId", this.togOtherExecuteAttrib = {
        trueLabel: '+x',
        falseLabel: '-x'
    }, this.togOtherExecuteModel = {
        disabled: false
    });
    this.controller.setupWidget("togStickyBitId", this.togStickyBitAttrib = {
    }, this.togStickyBitModel = {
        disabled: false
    });
    this.controller.setupWidget("togSuidUserId", this.togSuidUserAttrib = {
    }, this.togSuidUserModel = {
        disabled: false
    });
    this.controller.setupWidget("togSuidGroupId", this.togSuidGroupAttrib = {
    }, this.togSuidGroupModel = {
        disabled: false
    });
    
    Mojo.Event.listen(this.controller.get('togUserReadId'), Mojo.Event.propertyChange, this.handleToggleUserRead.bind(this));
    Mojo.Event.listen(this.controller.get('togUserWriteId'), Mojo.Event.propertyChange, this.handleToggleUserWrite.bind(this));
    Mojo.Event.listen(this.controller.get('togUserExecuteId'), Mojo.Event.propertyChange, this.handleToggleUserExecute.bind(this));
    
    Mojo.Event.listen(this.controller.get('togGroupReadId'), Mojo.Event.propertyChange, this.handleToggleGroupRead.bind(this));
    Mojo.Event.listen(this.controller.get('togGroupWriteId'), Mojo.Event.propertyChange, this.handleToggleGroupWrite.bind(this));
    Mojo.Event.listen(this.controller.get('togGroupExecuteId'), Mojo.Event.propertyChange, this.handleToggleGroupExecute.bind(this));
    
    Mojo.Event.listen(this.controller.get('togOtherReadId'), Mojo.Event.propertyChange, this.handleToggleOtherRead.bind(this));
    Mojo.Event.listen(this.controller.get('togOtherWriteId'), Mojo.Event.propertyChange, this.handleToggleOtherWrite.bind(this));
    Mojo.Event.listen(this.controller.get('togOtherExecuteId'), Mojo.Event.propertyChange, this.handleToggleOtherExecute.bind(this));
	
    Mojo.Event.listen(this.controller.get('togStickyBitId'), Mojo.Event.propertyChange, this.handleToggleStickyBit.bind(this));
    Mojo.Event.listen(this.controller.get('togSuidUserId'), Mojo.Event.propertyChange, this.handleToggleSuidUser.bind(this));
    Mojo.Event.listen(this.controller.get('togSuidGroupId'), Mojo.Event.propertyChange, this.handleToggleSuidGroup.bind(this));
	
}


MainAssistant.prototype.activate = function(event)
{
}


MainAssistant.prototype.deactivate = function(event)
{
}


MainAssistant.prototype.cleanup = function(event)
{

}


MainAssistant.prototype.handleToggleUserRead = function(event)
{
    if (event.value) {
        this.mask.user += 4;
		this.umask.user -= 4;
    }
    else {
        this.mask.user -= 4;
		this.umask.user += 4;
    }
    this.controller.get('maskUser').update(this.mask.user);
    this.controller.get('umaskUser').update(this.umask.user);
}


MainAssistant.prototype.handleToggleUserWrite = function(event)
{
    if (event.value) {
        this.mask.user += 2;
        this.umask.user -= 2;
    }
    else {
        this.mask.user -= 2;
        this.umask.user += 2;
    }
    this.controller.get('maskUser').update(this.mask.user);
    this.controller.get('umaskUser').update(this.umask.user);
}


MainAssistant.prototype.handleToggleUserExecute = function(event)
{
    if (event.value) {
        this.mask.user += 1;
        this.umask.user -= 1;
    }
    else {
        this.mask.user -= 1;
        this.umask.user += 1;
    }
    this.controller.get('maskUser').update(this.mask.user);
    this.controller.get('umaskUser').update(this.umask.user);
}


MainAssistant.prototype.handleToggleGroupRead = function(event)
{
    if (event.value) {
        this.mask.group += 4;
        this.umask.group -= 4;
    }
    else {
        this.mask.group -= 4;
        this.umask.group += 4;
    }
    this.controller.get('maskGroup').update(this.mask.group);
    this.controller.get('umaskGroup').update(this.umask.group);
}


MainAssistant.prototype.handleToggleGroupWrite = function(event)
{
    if (event.value) {
        this.mask.group += 2;
        this.umask.group -= 2;
    }
    else {
        this.mask.group -= 2;
        this.umask.group += 2;
    }
    this.controller.get('maskGroup').update(this.mask.group);
    this.controller.get('umaskGroup').update(this.umask.group);
}


MainAssistant.prototype.handleToggleGroupExecute = function(event)
{
    if (event.value) {
        this.mask.group += 1;
        this.umask.group -= 1;
    }
    else {
        this.mask.group -= 1;
        this.umask.group += 1;
    }
    this.controller.get('maskGroup').update(this.mask.group);
    this.controller.get('umaskGroup').update(this.umask.group);
}


MainAssistant.prototype.handleToggleOtherRead = function(event)
{
    if (event.value) {
        this.mask.other += 4;
        this.umask.other -= 4;
    }
    else {
        this.mask.other -= 4;
        this.umask.other += 4;
    }
    this.controller.get('maskOther').update(this.mask.other);
    this.controller.get('umaskOther').update(this.umask.other);
}


MainAssistant.prototype.handleToggleOtherWrite = function(event)
{
    if (event.value) {
        this.mask.other += 2;
        this.umask.other -= 2;
    }
    else {
        this.mask.other -= 2;
        this.umask.other += 2;
    }
    this.controller.get('maskOther').update(this.mask.other);
    this.controller.get('umaskOther').update(this.umask.other);
}


MainAssistant.prototype.handleToggleOtherExecute = function(event)
{
    if (event.value) {
        this.mask.other += 1;
        this.umask.other -= 1;
    }
    else {
        this.mask.other -= 1;
        this.umask.other += 1;
    }
    this.controller.get('maskOther').update(this.mask.other);
    this.controller.get('umaskOther').update(this.umask.other);
}


MainAssistant.prototype.handleToggleStickyBit = function(event)
{
    if (event.value) {
        this.mask.stickyBit += 1;
    }
    else {
        this.mask.stickyBit -= 1;
    }
    this.controller.get('maskStickyBit').update(this.mask.stickyBit);
}


MainAssistant.prototype.handleToggleSuidUser = function(event)
{
    if (event.value) {
        this.mask.stickyBit += 4;
    }
    else {
        this.mask.stickyBit -= 4;
    }
    this.controller.get('maskStickyBit').update(this.mask.stickyBit);
}

MainAssistant.prototype.handleToggleSuidGroup = function(event)
{
    if (event.value) {
        this.mask.stickyBit += 2;
    }
    else {
        this.mask.stickyBit -= 2;
    }
    this.controller.get('maskStickyBit').update(this.mask.stickyBit);
}
