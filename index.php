<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
	<head>
		<meta charset="utf-8" />
		<link href="css/style.css" rel="stylesheet">
		<meta http-equiv="x-ua-compatible" content="IE=edge"/>
		<title>JavaScript Assignment 1</title>
		<script src="js/javascript-events.js" type="text/javascript"> </script>
	</head>
	<body>
		<main>
			<h2>An Old Taoist Folk Tale</h2>
			<div id="click" onclick="clickEvent();" class="container"><p>There was once a poor farmer who could afford to own just one horse. He cared well for the animal, but one summer night, it escaped through a weak fence and ran away. </p>
			<p>When his neighbors discovered what had happened, they visited to offer their condolences. "What bad luck!" they exclaimed. The farmer replied, "Maybe. Maybe not." </p></div>
			<p>Soon the farmer's son began the work of taming the new arrivals. While attempting to ride the roan stallion, he was thrown to the ground and half-trampled. His leg was badly broken. The neighbors came to investigate. "What terrible luck!" they exclaimed. The farmer replied, "Maybe. Maybe not." </p>
			<p><input type="checkbox";">Maybe</p>
				<p><input type="checkbox" id="checkbox" value="1" onchange="showMoreInfo();">Maybe not.</p>
				<div id="moreInfo">
					<textarea cols="150" rows="3">The next day, soldiers visited the farmer's village. Strife had recently broken out between two warlords, and one of them had come to conscript all the local young men. Though every other son was commandeered, the farmer's boy was exempted because of his injury. The neighbors gathered again. "What fantastic luck!" they exclaimed. "Maybe," the farmer said. "Maybe not."</textarea>
			</div>
		</main>
	</body>
</html>
