<?php
?><!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
<!--  If necessary, please modify the charset parameter to specify the        -->
<!--  character set of your HTML page.                                        -->
<!--  ----------------------------------------------------------------------  -->

<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="copiedCSS.css"/>

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <FORM> element to your page.             -->
<!--  ----------------------------------------------------------------------  -->

<form class="connect-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

<input type=hidden name="oid" value="00D1I000003nSqw">
<input type=hidden name="retURL" value="https://www.prolificinteractive.com/work/">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail"                                  -->
<!--  value="bwilliams@prolificinteractive.com">                              -->
<!--  ----------------------------------------------------------------------  -->
<h2 class="connect-section-headline">Let's build something remarkable together.</h2>
<label for="first_name">First Name</label><div class="input-field"><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br></div>

<label for="last_name">Last Name</label><div class="input-field"><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br></div>

I'm interested in...<select  id="00N1I00000LqV18" name="00N1I00000LqV18" title="Connect Form - Interested in:"><option value=""><div class="input-field input-field-interested-in"> <div class="select-wrapper"><span class="caret">▼</span>
	<input type="text" class="select-dropdown" readonly="true" value="New Business"><ul class="dropdown-content select-dropdown" style="width: 350px; position: absolute; top: 0px; left: 0px; opacity: 1; display: none;"><li class=""><span>New Business</span></li><li class=""><span>Career Opportunities</span></li><li class="active selected"><span>Press</span></li><li class=""><span>Other</span></li></ul><select id="interest" name="interest" class="initialized"><option value="New Business">New Business</option><option value="Career Opportunities">Career Opportunities</option><option value="Press">Press</option><option value="Other">Other</option> </select></div></div>
</select><br>

<label for="company">Company</label><div class="input-field"><input  id="company" maxlength="40" name="company" size="20" type="text" /><br></div>

<label for="email">Email</label><div class="input-field"><input  id="email" maxlength="80" name="email" size="20" type="text" /><br></div>

<label>What problem can we help you solve? Tell us about your project.</label><div class="input-field "><textarea  id="00N1I00000LqV1D" name="00N1I00000LqV1D" class="materialize-textarea"></textarea><br></div>

<input type="submit" class="btn btn-primary form-submit" name="submit">

</form>
